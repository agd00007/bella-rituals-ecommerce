const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/makeupDB";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB conectado correctamente");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

module.exports = mongoose;
