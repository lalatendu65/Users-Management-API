const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connection = require("./src/config/dbconnection");

let PORT = process.env.PORT; // Set default in case PORT is not loaded
let URL = process.env.MONGO_URL; // Default URL fallback
connection(URL);

const router = require("./src/routes/customerroutes");
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
