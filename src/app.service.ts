import { Injectable, Res } from '@nestjs/common';
import { GETPdfDto } from './requests.dto';
import { PuppeteerService } from './puppeteer.service';
import { createReadStream, access, constants} from 'fs';

import * as path from 'path';
@Injectable()
export class AppService {
  constructor(public puppeteerService: PuppeteerService) {
  }
  getHello(): string {
    return 'Hello World!';
  }
  async getPDF(query: GETPdfDto) {
    console.log('query', query)
    access(path.join(__dirname, '/tmp/msr_' + query.formId + '.pdf'), constants.F_OK, (err) => {
      return 'no file';
    })
    let file = createReadStream(path.join(__dirname, '/tmp/msr_' + query.formId + '.pdf'));
    return file;
  }
  async postCreatePDF(formId: string, submission: any, lang: string) {
    await this.puppeteerService.createPDF(formId, submission, lang);
    let file = createReadStream(path.join(__dirname, '/tmp/msr_' + formId + '.pdf'));
    return file;
  }
}
