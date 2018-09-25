import { Module, NestModule, RequestMethod, MiddlewareConsumer, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import { QrController } from './qr/qr.controller';
import { CookieSessionMiddleware } from '@nest-middlewares/cookie-session';
import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, QrController],
})
export class AppModule implements NestModule {
  constructor(private readonly envConfig: ConfigService) {}

  configure(consumer: MiddlewareConsumer): void {
    CookieSessionMiddleware.configure({
      name: 's',
      sameSite: true,
      keys: this.envConfig.get('SESSION_KEYS').split(/,/g),
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    });

    consumer
      .apply(CookieSessionMiddleware)
      .forRoutes('/');
  }
}
