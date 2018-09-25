import { Get, Controller, Param, Header, Response } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Controller('qr')
export class QrController {
  @Get(':address([a-z0-9]{3})')
  @Header('content-type', 'image/png')
  root(
    @Param('address') address: string,
    @Response() response: any,
  ): void {
    QRCode.toFileStream(response, `${address}@9k1.us`, {
      errorCorrectionLevel: 'L',
      scale: 14,
      margin: 1,
      color: {
        dark: '#22112a',
        light: '#aaff00',
      },
    });
  }
}
