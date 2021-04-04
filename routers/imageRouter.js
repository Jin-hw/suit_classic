import express from "express";
import { deleteImage, editImage, getUpload, imageDetail, postUpload } from "../controllers/imageController";
import routes from "../routes";

const imageRouter = express.Router();

imageRouter.get(routes.upload, getUpload);
imageRouter.post(routes.upload, postUpload);

imageRouter.get(routes.imageDetail(), imageDetail);
imageRouter.get(routes.editImage, editImage);
imageRouter.get(routes.deleteImage, deleteImage);

export default imageRouter;