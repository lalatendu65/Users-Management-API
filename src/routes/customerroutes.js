const express = require("express");

const {
  addUser,
  allUsers,
  userDetails,
  UserDetailsUpdate,
  userDetailsDelete,
} = require("../controller/customerController");

const router = express.Router();

router.post("/users", addUser);
router.get("/users", allUsers);
router.get("/users/:id", userDetails);
router.put("/users/:id", UserDetailsUpdate);
router.delete("/users/:id", userDetailsDelete);

module.exports = router;
