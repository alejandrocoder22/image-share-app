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
exports.deleteImage = exports.createImage = exports.getPersonalImages = void 0;
const database_1 = __importDefault(require("../database"));
const getPersonalImages = (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield database_1.default.query('SELECT * FROM images WHERE user_id = $1', [userId]); });
exports.getPersonalImages = getPersonalImages;
const createImage = (fileUrl, userId) => __awaiter(void 0, void 0, void 0, function* () { return yield database_1.default.query('INSERT INTO images (url, user_id) VALUES($1,$2)', [fileUrl, userId]); });
exports.createImage = createImage;
const deleteImage = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield database_1.default.query('DELETE FROM images WHERE image_id = $1', [id]); });
exports.deleteImage = deleteImage;
