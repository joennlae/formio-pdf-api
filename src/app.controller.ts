import { Controller, Get, Query, Res, Header, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { GETPdfDto } from './requests.dto';
import { unlink } from 'fs';

import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('pdf')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename=lepdf.pdf')
  async getPdf(@Res() response, @Query() query: GETPdfDto){
    let stream = await this.appService.getPDF(query)
    stream.on('close', function(){
      unlink(path.join(__dirname, '/tmp/msr_' + query.formId + '.pdf'), function() {});
    })
    return stream.pipe(response);
  }
  @Post('pdf')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename=ledf.pdf')
  async postCreatePdf(@Res() response, @Body('formId') formId: string, @Body('submission') submission: any, @Body('lang') lang: string){
    let stream = await this.appService.postCreatePDF(formId, submission, lang);
    stream.on('close', function(){
      unlink(path.join(__dirname, '/tmp/msr_' + formId + '.pdf'), function() {});
    })
    return stream.pipe(response);
  }
}
