"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.token) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        res.status(400).send({ status: 'FAIL', message: 'You must send a valid token' });
    }
    if (token) {
        jsonwebtoken_1.default.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
            if (err != null) {
                res.send(err);
                return;
            }
            req.user = decoded;
            next();
        });
    }
};
exports.verifyToken = verifyToken;
