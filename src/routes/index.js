var express = require("express"),
LoginController = require("../controller/LoginController"),
auth = require("../middlewares/loginAuth"),
router = express.Router()

router.get("/admin-login",LoginController.login);
router.post("/admin-login",LoginController.loginPost);
router.get("/logout",LoginController.logout);


router.get("/dashboard",auth,LoginController.index);

router.get("/addCategories",auth,LoginController.addCategories);


module.exports = router;