import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from './config.service';
export declare class AppModule implements NestModule {
    private readonly envConfig;
    constructor(envConfig: ConfigService);
    configure(consumer: MiddlewareConsumer): void;
}
