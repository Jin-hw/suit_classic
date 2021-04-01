import express from "express";
import { deleteImage, editImage, imageDetail, upload } from "../controllers/imageController";
import routes from "../routes";

const imageRouter = express.Router();

imageRouter.get(routes.upload, upload);
imageRouter.get(routes.deleteImage, deleteImage);
imageRouter.get(routes.imageDetail, imageDetail);
imageRouter.get(routes.editImage, editImage);

export default imageRouter;