export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const imageDetail = (req, res) => res.render("imageDetail", { pageTitle: "Image Detail" });
export const editImage = (req, res) => res.render("editImage", { pageTitle: "Edit Image" });
export const deleteImage = (req, res) => res.render("deleteImage", { pageTitle: "Delete Image" });