"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
// src/services/jwt-service.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../../env"));
class JwtService {
    static generateAccessToken(payload) {
        return jsonwebtoken_1.default.sign(payload, env_1.default.JWT_SECRET, { expiresIn: '20m' });
    }
    static generateRefreshToken(payload) {
        return jsonwebtoken_1.default.sign(payload, env_1.default.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    }
    static verifyAccessToken(token) {
        return jsonwebtoken_1.default.verify(token, env_1.default.JWT_SECRET);
    }
    static verifyRefreshToken(token) {
        return jsonwebtoken_1.default.verify(token, env_1.default.JWT_REFRESH_SECRET);
    }
}
exports.JwtService = JwtService;
