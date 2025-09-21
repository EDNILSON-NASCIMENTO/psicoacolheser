"use strict";
// apps/backend/src/server.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const index_1 = __importDefault(require("./env/index"));
const user_router_1 = require("./http/routers/user.router");
const auth_router_1 = require("./http/routers/auth.router");
const cors_1 = __importDefault(require("cors")); // Adicione esta linha
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)()); // Adicione esta linha para habilitar CORS
app.use('/users', user_router_1.userRouter);
app.use('/auth', auth_router_1.authRouter);
app.get('/health', (req, res) => {
    return res.send('ok');
});
app.listen(index_1.default.BACK_END_PORT, () => {
    console.log(`server listening on port: ${index_1.default.BACK_END_PORT}`);
});
