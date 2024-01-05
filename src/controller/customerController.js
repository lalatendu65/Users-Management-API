const CustomerData= require('../models/customerSchema')

// creating the Customer with adding details
const addCustomer = async (req, res) => {
    //console.log(req.body);
  const { name, email, phoneNumber, address } = req.body;
  // Check if the email already exists in the database

  const existingCustomer = await CustomerData.findOne({ email });

  if (existingCustomer) { 
    return res.status(400).json({ message: "User already exists with this email" });
  }

  const newCustomer = new CustomerData({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
  });
  try {
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(401).json({ message: "Error while creating new Customer" });
  }
};


// Getting Customer details with specific Customer ID
const customerdetails=async(req,res)=>{
    const id=req.params.id;
    try{
        const customerDetails = await CustomerData.findById(id);

      if (!customerDetails) {
        return res.status(404).json({message: "No Customer details available for this specific ID"});
      }

      res.status(200).json(customerDetails);

    }

    catch(error){
      if (error.name === "CastError") {
        // This error occurs when the provided ID is not valid
        return res.status(400).json({ message: "Invalid ID format" });
      }

        res.status(404).json({message:'Error while getting Customer Details'});
        
    }
}

// updating Customer details by specific id 
const CustomerdetailsUpdate = async (req, res) => {
  const id = req.params.id;
  const { name, email, phoneNumber, address } = req.body;

  try {
    const customerUpdate = await CustomerData.findByIdAndUpdate(id,{ name, email, phoneNumber, address },{ new: true });

    if (!customerUpdate) {
      return res.status(404).json({ message: "No Customer details available for this specific ID" });
    }

    res.status(200).json(customerUpdate);
  } 

  catch (error) {
    res.status(500).json({ message: "An error occurred while updating the customer details" });
  }
};

//deleting customer details by specific id  
const customerdetailsDelete = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteCustomerdetails = await CustomerData.findOneAndDelete(id);

    if (!deleteCustomerdetails) {
      return res.status(404).json({ message: "No Customer details available for this specific ID" });
    }

    res.status(202).json({ message: "Customer details deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the Customer Details" });
  }
};

module.exports = {
  addCustomer,
  customerdetails,
  CustomerdetailsUpdate,
  customerdetailsDelete,
};
