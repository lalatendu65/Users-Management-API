const express = require("express");
const app = express();

const connection = require("./src/config/dbconnection");
const dotenv = require("dotenv");
dotenv.config();
let PORT = process.env.PORT || 8000;
let username = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;
connection(username, password);

const router = require("./src/routes/customerroutes");
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server listen at ${PORT}`);
});
