const express = require("express");
const router = express.Router();
// const { userLogin } = require('../middleware/validator')
// const { protect } = require('../middleware/auth')
const { VerifyUser, Logout } = require("../controllers/account/auth");
const { protect } = require("../middleware/auth");

const { SearchCustomer, ViewAdvices, PrintInvoice } = require("../controllers/treasury/tbills");


//routes

//monitors
router.route("/search_customer").post(SearchCustomer);
router.route("/view_invoice").post(ViewAdvices);
router.route("/print_invoice").post(PrintInvoice);

//user login auth
router.route("/auth").post(protect, VerifyUser);
router.route("/logout").post(protect, Logout);
module.exports = router;
