exports.id = "main";
exports.modules = {

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet AppController = class AppController {\n    root(req) {\n        req.session.address = req.session.address || 'nil'.replace(/./g, () => Math.floor(36 * Math.random()).toString(36));\n        return { address: req.session.address };\n    }\n    search() { }\n    random() { }\n};\n__decorate([\n    common_1.Get(),\n    common_1.Render('index'),\n    __param(0, common_1.Request()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Object)\n], AppController.prototype, \"root\", null);\n__decorate([\n    common_1.Get('/search'),\n    common_1.Render('search'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], AppController.prototype, \"search\", null);\n__decorate([\n    common_1.Get('/random'),\n    common_1.Render('random'),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], AppController.prototype, \"random\", null);\nAppController = __decorate([\n    common_1.Controller()\n], AppController);\nexports.AppController = AppController;\n\n\n//# sourceURL=webpack:///./src/app.controller.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst qr_controller_1 = __webpack_require__(/*! ./qr/qr.controller */ \"./src/qr/qr.controller.ts\");\nconst cookie_session_1 = __webpack_require__(/*! @nest-middlewares/cookie-session */ \"@nest-middlewares/cookie-session\");\nconst config_service_1 = __webpack_require__(/*! ./config.service */ \"./src/config.service.ts\");\nconst config_module_1 = __webpack_require__(/*! ./config.module */ \"./src/config.module.ts\");\nlet AppModule = class AppModule {\n    constructor(envConfig) {\n        this.envConfig = envConfig;\n    }\n    configure(consumer) {\n        cookie_session_1.CookieSessionMiddleware.configure({\n            name: 's',\n            sameSite: true,\n            keys: this.envConfig.get('SESSION_KEYS').split(/,/g),\n            maxAge: 14 * 24 * 60 * 60 * 1000,\n        });\n        consumer\n            .apply(cookie_session_1.CookieSessionMiddleware)\n            .forRoutes(app_controller_1.AppController);\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [config_module_1.ConfigModule],\n        controllers: [app_controller_1.AppController, qr_controller_1.QrController],\n    }),\n    __metadata(\"design:paramtypes\", [config_service_1.ConfigService])\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ })

};