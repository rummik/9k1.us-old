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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const QRCode = require("qrcode");
let QrController = class QrController {
    root(address, response) {
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
};
__decorate([
    common_1.Get(':address([a-z0-9]{3})'),
    common_1.Header('content-type', 'image/png'),
    __param(0, common_1.Param('address')),
    __param(1, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], QrController.prototype, "root", null);
QrController = __decorate([
    common_1.Controller('qr')
], QrController);
exports.QrController = QrController;
//# sourceMappingURL=qr.controller.js.map