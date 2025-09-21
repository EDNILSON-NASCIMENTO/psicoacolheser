"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptEncoderService = void 0;
const bcrypt_1 = require("bcrypt");
class BcryptEncoderService {
    async encode(raw) {
        return await (0, bcrypt_1.hash)(raw, 8);
    }
    async compare(raw, encoded) {
        return await (0, bcrypt_1.compare)(raw, encoded);
    }
}
exports.BcryptEncoderService = BcryptEncoderService;
