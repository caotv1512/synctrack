import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as aws4 from 'aws4';
@Injectable()
export class SupertestService {
  async getDataAWS(query) {
    
    let req = {
      method: 'GET',
      host: 'api.shiplogic.com',
      path: '/tracking/shipments?tracking_reference=G9G',
      service: 'execute-api',
      region: 'af-south-1',
      url: 'https://api.shiplogic.com/tracking/shipments?tracking_reference=G9G',
    };

    let sign = aws4.sign(req, {
      accessKeyId: 'AKIA55D5DNTBPQ25INCH',
      secretAccessKey: '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',
    });
    let res = await axios(sign);
    return res.data;
  }
}
