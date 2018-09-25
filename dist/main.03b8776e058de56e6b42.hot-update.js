exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst qr_controller_1 = __webpack_require__(/*! ./qr/qr.controller */ \"./src/qr/qr.controller.ts\");\nconst cookie_session_1 = __webpack_require__(/*! @nest-middlewares/cookie-session */ \"@nest-middlewares/cookie-session\");\nconst config_service_1 = __webpack_require__(/*! ./config.service */ \"./src/config.service.ts\");\nconst config_module_1 = __webpack_require__(/*! ./config.module */ \"./src/config.module.ts\");\nlet AppModule = class AppModule {\n    constructor(envConfig) {\n        this.envConfig = envConfig;\n    }\n    configure(consumer) {\n        cookie_session_1.CookieSessionMiddleware.configure({\n            name: 's',\n            sameSite: true,\n            keys: this.envConfig.get('SESSION_KEYS').split(/,/g),\n            maxAge: 14 * 24 * 60 * 60 * 1000,\n        });\n        consumer\n            .apply(cookie_session_1.CookieSessionMiddleware)\n            .forRoutes('/');\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [config_module_1.ConfigModule],\n        controllers: [app_controller_1.AppController, qr_controller_1.QrController],\n    }),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/main.hmr.ts":
/*!*************************!*\
  !*** ./src/main.hmr.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nfunction bootstrap() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = yield core_1.NestFactory.create(app_module_1.AppModule);\n        app.useStaticAssets(path_1.join(process.cwd(), 'public'));\n        app.setBaseViewsDir(path_1.join(process.cwd(), 'views'));\n        app.setViewEngine('hbs');\n        yield app.listen(3000);\n        if (true) {\n            module.hot.accept();\n            module.hot.dispose(() => app.close());\n        }\n    });\n}\nbootstrap();\n\n\n//# sourceURL=webpack:///./src/main.hmr.ts?");

/***/ })

};