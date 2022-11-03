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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.createImage = exports.getPersonalImages = void 0;
const imagesServices = __importStar(require("../services/imagesServices"));
const getPersonalImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const images = yield imagesServices.getPersonalImages(user.user_id);
        res.status(200).send({ status: 'SUCESS', data: images.rows });
    }
    catch (error) {
        res.status(400).send({ status: 'FAIL' });
    }
});
exports.getPersonalImages = getPersonalImages;
const createImage = (req, res) => {
    const file = req.file;
    const fileUrl = `/${file.filename}`;
    try {
        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            res.status(400).send({ status: 'FAIL', message: 'Image must be PNG or JPEG' });
        }
        if (file.size > 2000000) {
            res.status(400).send({ status: 'FAIL', message: 'Image must be smaller than 2MB' });
        }
        imagesServices.createImage(fileUrl, req.user.user_id);
        res.status(200).send({ status: 'SUCESS', message: 'Image added' });
    }
    catch (error) {
        res.status(400).send({ status: 'FAIL' });
    }
};
exports.createImage = createImage;
const deleteImage = (req, res) => {
    const { imageId } = req.params;
    try {
        imagesServices.deleteImage(imageId);
        res.status(200).send({ status: 'SUCESS', message: 'Image Deleted' });
    }
    catch (error) {
        res.status(400).send({ status: 'FAIL' });
    }
};
exports.deleteImage = deleteImage;
