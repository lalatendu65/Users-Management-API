const mongoose = require("mongoose");

const connection = (URL) => {
  mongoose.connect(URL);

  mongoose.connection.on("connected", () => {
    console.log("Connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Error in connecting to DB: " + err);
  });
};

module.exports = connection;
