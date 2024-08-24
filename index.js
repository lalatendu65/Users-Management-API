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
app.get("/", (req, res) => {
  res.send(
    `<body style = "display: flex; background-color: #89CFF0; justify-content: center; align-items: center; height: 100vh; margin: 0;">
      <h1 style = "width: 200px; height: 200px; background-color: #89CFF0; text-align: center; padding: 20px;">
        Welcome to User management Api !
      </h1>
      <p> In This you can find information about the Users </p>
    </body>`
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
