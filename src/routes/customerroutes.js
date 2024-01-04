const express=require('express')

const {
  addCustomer,
  customerdetails,
  CustomerdetailsUpdate,
  customerdetailsDelete,
} = require("../controller/customerController");

const router=express.Router()

router.post("/addCustomer",addCustomer)
router.get("/customerdetails/:id", customerdetails);
router.put("/customerdetailsUpdate/:id", CustomerdetailsUpdate);
router.delete("/customerdetailsDelete/:id", customerdetailsDelete);


module.exports = router;