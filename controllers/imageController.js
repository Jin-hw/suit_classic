import routes from "../routes";
import Image from "../models/Image"

export const home = async (req, res) => {
    try {
        const image = await Image.find({});
        res.render("home", { pageTitle: "Home", images });
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", images: [] });
    }
}
export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, images });
}

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    res.redirect(routes.imageDetail(23452));
}

export const imageDetail = (req, res) => res.render("imageDetail", { pageTitle: "Image Detail" });

export const editImage = (req, res) => res.render("editImage", { pageTitle: "Edit Image" });

export const deleteImage = (req, res) => res.render("deleteImage", { pageTitle: "Delete Image" });
