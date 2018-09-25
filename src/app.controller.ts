import { Get, Controller, Render, Request, Header } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(@Request() req: any): object {
    req.session.address = req.session.address || 'nil'.replace(/./g, () =>
      Math.floor(36 * Math.random()).toString(36),
    );

    return { address: req.session.address };
  }

  @Get('/search')
  @Render('search')
  search(): void {}

  @Get('/random')
  @Render('random')
  random(): void {}

  @Get('/ip')
  @Header('content-type', 'text/plain')
  ip(@Request() req: any): string {
    return req.ip;
  }
}
