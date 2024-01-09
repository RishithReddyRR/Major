const express=require("express")
const { getPublicationsOfUser, getPublications, getPublicationDetails, getPublicationHome, getPublicationsAdmin, getAdminPublications, deletePublication } = require("../controllers/publicationController")
const { isAuthenticatedUser } = require("../middleware/auth")
const router=express.Router()



router.route("/user-publications").post(isAuthenticatedUser,getPublicationsOfUser);
router.route("/publications").get(getPublications);
router.route("/admin/publications").get(isAuthenticatedUser,getPublicationsAdmin);
router.route("/admin/delete/:id").delete(isAuthenticatedUser,deletePublication);
router.route("/publications-for-home").get(getPublicationHome);
router.route("/:id").get(getPublicationDetails);




module.exports=router