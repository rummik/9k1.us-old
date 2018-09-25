"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const qr_controller_1 = require("./qr/qr.controller");
const cookie_session_1 = require("@nest-middlewares/cookie-session");
const config_service_1 = require("./config.service");
const config_module_1 = require("./config.module");
let AppModule = class AppModule {
    constructor(envConfig) {
        this.envConfig = envConfig;
    }
    configure(consumer) {
        cookie_session_1.CookieSessionMiddleware.configure({
            name: 's',
            sameSite: true,
            keys: this.envConfig.get('SESSION_KEYS').split(/,/g),
            maxAge: 14 * 24 * 60 * 60 * 1000,
        });
        consumer
            .apply(cookie_session_1.CookieSessionMiddleware)
            .forRoutes('/');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [config_module_1.ConfigModule],
        controllers: [app_controller_1.AppController, qr_controller_1.QrController],
    }),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map