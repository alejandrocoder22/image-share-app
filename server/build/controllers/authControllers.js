"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.loginUser = exports.deleteUser = exports.createUser = void 0;
const authServices = __importStar(require("../services/authServices"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = req.body;
    try {
        authServices.createUser(credentials);
        res.status(200).send({ status: 'SUCESS' });
    }
    catch (error) {
        res.status(400).send({ status: 'FAIL' });
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    try {
        if (user.user_id === id) {
            authServices.deleteUser(id, user);
            res.status(200).send({ status: 'SUCESS' });
        }
        else {
            res.status(400).send({ status: 'FAIL', message: 'You can only delete your images' });
        }
    }
    catch (error) {
        res.status(400).send({ status: 'FAIL' });
    }
});
exports.deleteUser = deleteUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const userExist = yield authServices.loginUser(username);
        bcrypt_1.default.compare(password, userExist.rows[0].password, (err, result) => {
            if (err != null) {
                res.status(400).send({ status: 'FAIL', error: err });
            }
            if (!result) {
                res.status(400).send({ status: 'FAIL', message: 'Invalid username or password' });
            }
            if (result) {
                const token = jsonwebtoken_1.default.sign({ user_id: userExist.rows[0].user_id, username: userExist.rows[0].username }, process.env.JWT_PASSWORD);
                res.status(200).send({ status: 'SUCESS', token });
            }
        });
    }
    catch (error) {
        res.status(400).send({ status: 'FAIL', message: 'Invalid username or password' });
    }
});
exports.loginUser = loginUser;
const verifyToken = (req, res) => {
    res.status(200).send({ status: 'SUCESS', data: req.user });
};
exports.verifyToken = verifyToken;
