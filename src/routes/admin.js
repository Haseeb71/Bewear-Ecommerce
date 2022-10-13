var express = require("express"),
AdminController = require("../controller/AdminController"),
auth = require("../middlewares/loginAuth"),
multer  = require('multer'),
validProduct = require("../middlewares/validProduct"),
router = express.Router();

//Multer
// Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/productImages')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
 const upload = multer({ storage: storage })
 const multiple = upload.fields([{ name:"image"}])

// Categories Routes
router.get("/api/productCategories",auth,AdminController.showCategories);
router.post("/api/categorystore",AdminController.categoryStore);
router.get("/api/deleteCategories/:id",AdminController.removeCategories);
router.get("/api/editCategories/:slug",AdminController.editCategories);
router.post("/api/edit-categories/:slug",AdminController.editCatPost);

// Product Routes
router.get("/addProduct",auth,AdminController.showAddProduct);
router.post("/addProduct",auth,multiple,validProduct,AdminController.productPost);

router.get("/product-list",auth,AdminController.productList);
router.get("/product-delete/:id",auth,AdminController.productRemove);

router.get("/product-edit/:id",auth,AdminController.productEdit);
router.post("/product-edit/:id",auth,multiple,AdminController.productEditPost);
router.get("/image-delete/:id",auth,AdminController.delimg);

router.get("/product-details/:id",auth,AdminController.imgDetails);

router.get("/customer-details",auth,AdminController.customerPage);
router.get("/customer-edit/:id",auth,AdminController.customerEdit);
router.post("/customer-edit/:id",auth,AdminController.customerEditPost);
module.exports = router;