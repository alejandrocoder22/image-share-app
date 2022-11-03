"use strict";
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
exports.loginUser = exports.deleteUser = exports.createUser = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (credentials) => {
    const SALT_ROUNDS = 10;
    bcrypt_1.default.hash(credentials.password, SALT_ROUNDS, function (_err, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.query('INSERT INTO users (username, password) VALUES($1, $2)', [credentials.username, hash]);
        });
    });
};
exports.createUser = createUser;
const loginUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield database_1.default.query('SELECT * FROM users WHERE username = $1', [username]);
});
exports.loginUser = loginUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield database_1.default.query('DELETE FROM users WHERE ID = $1', [id]);
});
exports.deleteUser = deleteUser;
