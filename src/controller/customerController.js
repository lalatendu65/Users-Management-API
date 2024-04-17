const CustomerData = require("../models/customerSchema");

// creating the users with adding details
const addUser = async (req, res) => {
  const { name, email, age } = req.body;
  // Check if the email already exists in the database

  const existingCustomer = await CustomerData.findOne({ email });

  if (existingCustomer) {
    return res
      .status(400)
      .json({ message: "User already exists with this email" });
  }

  const newCustomer = new CustomerData({
    name: name,
    email: email,
    age: age,
  });
  try {
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(401).json({ message: "Error while creating new users" });
  }
};
// Getting all Users details
const allUsers = async (req, res) => {
  try {
    const allUser = await CustomerData.find();
    if (!allUser || allUser.length === 0) {
      return res.status(404).json({
        message: "No Customer details available",
      });
    }
    // Send the users found in the database as a response
    return res.status(200).json(allUser);
  } catch (error) {
    console.error("Error while getting Customer Details:", error);
    res.status(500).json({ message: "Error while getting Customer Details" });
  }
};

// Getting users details with specific Customer ID
const userDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const userDetails = await CustomerData.findById(id);

    if (!userDetails) {
      return res.status(404).json({
        message: "No User details available for this specific ID",
      });
    }

    res.status(200).json(userDetails);
  } catch (error) {
    if (error.name === "CastError") {
      // This error occurs when the provided ID is not valid
      return res.status(400).json({ message: "Invalid ID format" });
    }

    res.status(404).json({ message: "Error while getting User Details" });
  }
};

// updating users details by specific id
const UserDetailsUpdate = async (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;

  try {
    const userUpdate = await CustomerData.findByIdAndUpdate(
      id,
      { name, email, age },
      { new: true }
    );

    if (!userUpdate) {
      return res.status(404).json({
        message: "No users details available for this specific ID",
      });
    }

    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the users details",
    });
  }
};

//deleting users details by specific id
const userDetailsDelete = async (req, res) => {
  const id = req.params.id;

  try {
    const userDetails = await CustomerData.findOneAndDelete(id);

    if (!userDetails) {
      return res.status(404).json({
        message: "No users details available for this specific ID",
      });
    }

    res.status(202).json({ message: "users details deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the users Details",
    });
  }
};

module.exports = {
  addUser,
  allUsers,
  userDetails,
  UserDetailsUpdate,
  userDetailsDelete,
};
