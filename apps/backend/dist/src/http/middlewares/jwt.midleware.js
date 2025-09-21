"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../../env"));
function authMiddleware() {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];
        if (!token)
            return res.sendStatus(401);
        try {
            const payload = jsonwebtoken_1.default.verify(token, env_1.default.JWT_SECRET);
            req.user = { id: payload.userId };
            next();
        }
        catch {
            res.sendStatus(403);
        }
    };
}
