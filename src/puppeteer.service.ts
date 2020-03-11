import * as puppeteer from 'puppeteer';
import * as path from 'path';
import * as fs from 'fs';
import FormLoaderService from './formLoader.service';
export class PuppeteerService {
    started: boolean = false;
    browser = null;
    constructor() {
        this.init();
    }
    async init() {
        try {
            this.browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-web-security'] });
            this.started = true;
            this.browser.newPage()
            console.log('puppeteer started');
        }
        catch (e) { console.log(e) }
    }
    async createPDF(formId: string, submission: any, lang: string) {
        console.log('location', process.cwd());
        if (this.started) {
            try {
                const page = await this.browser.newPage();
                let formData = await FormLoaderService.loadCMSFormsNew(formId);
                console.log('test', formData[0].transTitle[lang]);
                page.on('console', msg => console.log('PAGE LOG:', msg.text()))
                await page.setDefaultNavigationTimeout(0);
                await page.addScriptTag({
                    path: "dist/formio/formio-full.min.js"
                })
                await page.addScriptTag({
                    path: "dist/formio/fileLoader.js"
                })
                await page.addScriptTag({
                    path: "dist/formio/angular-translate.js"
                })
                await page.addScriptTag({
                    path: "dist/formio/ngStorage.min.js"
                })
                await page.addStyleTag({
                    path: "dist/formio/formio-full.min.css"
                })
                await page.addStyleTag({
                    path: "dist/formio/custom.css"
                })
                await page.addStyleTag({
                    content: `
                    @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700);
                    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
                
                    @font-face {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 300;
                        src: local('Roboto'), local('Roboto-Light'), url(styles/Roboto-Light.ttf) format('truetype');
                    }
                    @font-face {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 400;
                        src: local('Roboto'), local('Roboto-Regular'), url(styles/Roboto-Regular.ttf) format('truetype');
                    }
                    @font-face {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 500;
                        src: local('Roboto'), local('Roboto-Medium'), url(styles/Roboto-Medium.ttf) format('truetype');
                    }
                    @font-face {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-weight: 700;
                        src: local('Roboto'), local('Roboto-Bold'), url(styles/Roboto-Bold.ttf) format('truetype');
                    }
                    body {
                        color: #141414 !important;
                    }
                
                    .prevent-split {
                        background:#fff;
                        float:left;
                        width:100%;
                        height:auto;
                        display:block;
                    }
                
                    .col-center {
                        margin: 0 !important;
                        width: 100% !important;
                        padding-top:0 !important;
                        float:left !important;
                    }
                
                    .scrollmenu-wrapper {
                        width:100% !important;
                    }
                
                    .col-inner-lw-2 {
                        padding-left:0 !important;
                        padding-right:0 !important;
                    }
                
                
                    .no-show {
                        display:none;
                    }
                
                    .medi {
                        font-size:25px !important;
                        line-height:29px !important;
                    }
                
                    h3 {
                        font-size:20px !important;
                        line-height:24px !important;
                        font-weight:normal;
                        margin-bottom:17px !important;
                    }
                
                    .default {
                        font-size:20px !important;
                        line-height:24px !important;
                    }
                
                
                    .def label {
                        position: relative;
                        display: inline-block;
                        padding: 0 0 12px 2.5em !important;
                        height: auto !important;
                        line-height: 1.5;
                        float:left !important;;
                        width:100% !important;;
                    }
                
                    strong {
                        font-weight:normal !important;
                    }
                
                     input[type=checkbox] + label{
                         font-size: 25px;
                         background: #ffffff !important;
                         color: #141414!important;
                         border-radius: 0!important;
                         font-weight:normal!important;
                         border-left:1px solid #ccc!important;
                         border-right:none!important;
                         border-top:none!important;
                         border-bottom:1px solid #ccc!important;
                         margin-bottom:14px !important;
                         width:100%;
                         height: auto !important;
                     }
                
                     input[type=radio] + label{
                         font-size: 25px;
                         background: #ffffff !important;
                         color: #141414!important;
                         border-radius: 0!important;
                         font-weight:normal!important;
                         border-left:1px solid #ccc!important;
                         border-right:none!important;
                         border-top:none!important;
                         border-bottom:1px solid #ccc!important;
                         margin-bottom:14px !important;
                         width:100%;
                         height: auto !important;
                     }
                
                    .def input[type="checkbox"]:checked + label::before,
                    .def input[type="radio"]:checked + label::before {
                        background: #414141;
                        border-color: #414141;
                    }
                
                    .def input[type=radio] + label::after {
                        background: #414141;
                    }
                
                    .def input[type="radio"] + label::before {
                        margin-left:6px;
                        position:absolute;
                        right:0;
                    }
                
                    .def input[type="radio"] + label::after {
                        margin-left:6px;
                    }
                
                    .def input[type="checkbox"] + label::before {
                        border-radius: 3px !important;
                        margin-left:6px;
                    }
                
                
                    .def input[type="checkbox"] + label::after {
                        content: "√" !important;
                        margin-left:6px;
                    }
                
                    input[type="text"] {
                        font-size: 25px !important;
                        width:100%;
                        float:left;
                        margin-bottom:14px;
                    }
                
                    textarea.def {
                        resize: none;
                        font-size: 25px !important;
                        line-height:normal !important;
                    }
                
                    textarea.def {
                        width:100%;
                        border: none !important;
                        padding: 0 0px !important;
                        line-height: auto !important;
                        background-image: none !important;
                        height: auto !important;
                    }
                
                
                
                    .page-template {
                        font-family: 'Open Sans', sans-serif;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                    }
                    .offsite-col-diary {
                        margin-bottom: 0 !important;
                        margin-top: 0 !important;
                        display: block !important;
                        padding: 0 !important;
                        width: 100% !important;
                        margin-left: 0 !important;
                        float: left !important;
                        clear:both !important;
                    }
                
                
                    .page-template .footer {
                        font-family: 'Roboto', sans-serif;
                        position: absolute;
                        bottom: 35px;
                        left: 30px;
                        right: 30px;
                        margin-top: 20px !important;
                        margin-bottom: 20px !important;
                        margin-outside: 20px !important;
                    }
                    .k-widget {
                        font-family: 'Open Sans', sans-serif;
                    }
                
                    .name::before {
                        content: '{{headerPDF}}';
                        font-family: 'Roboto', sans-serif;
                        position: absolute;
                        top: 12px;
                        left: 30px;
                        font-size: 18px;
                    }
                    .header {
                        font-family: 'Roboto', sans-serif;
                        position: absolute;
                        top: 38px;
                        left: 30px;
                        right: 30px;
                        margin-bottom: 20px !important;
                        margin-outside: 20px !important;
                        border-bottom: 1px solid #888;
                        font-size: 18px;
                    }`
                })

                //await page.setContent(this.createHTML(), { waitUntil: 'networkidle2' });
                await page.evaluate(() => {
                    console.log('yolo');
                    //@ts-ignore
                })
                await page.goto(path.join('file:///', process.cwd(), 'dist', 'formio/test.html'), { waitUntil: 'networkidle0' });
                //angular.element(document.getElementById('inputFromExternEntryPoint')).scope().$root.inputFromExtern('5dc2e1cda3b9b916ce42c5b1', submissionTest)
                await page.evaluate(({ formId, submission, lang }) => {
                    console.log('starting submission', formId, submission, lang);

                    //@ts-ignore
                    angular.element(document.getElementById('inputFromExternEntryPoint')).scope().$root.inputFromExtern(formId, submission, lang )
                }, { formId, submission, lang })
                await page.waitFor('#renderingNotificator', { timeout: 180000 });
                await page.pdf({ path: 'dist/tmp/msr_' + formId + '.pdf', format: 'A4', scale: 0.4 , margin: { top: '1cm', right: '1cm', left: '1cm', bottom: '1cm'}, printBackground: true, displayHeaderFooter: true,
                headerTemplate : `
                <div style="width:100%; font-size:8px!important;color:#6d6d6d!important;padding-left:10px;text-align:left; margin-top: -5px;"><span>` + formData[0].transTitle[lang] +"</span></div>",
                footerTemplate : `
                    <div style="width:100%; font-size:8px!important;color:#6d6d6d!important;padding-right:10px;text-align:right; margin-bottom: -5px;">
                        <span class='pageNumber'></span>/<span class='totalPages'></span>
                    </div>`});
                await page.close()
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            console.warn('Puppeteer not started');
        }
    }
}