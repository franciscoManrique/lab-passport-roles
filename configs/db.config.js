const mongoose = require("mongoose");
const DB_NAME = "passport-roles-fran";
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to ${DB_NAME} database.`);
  })
  .catch(error => {
    console.error(`Database connection error: ${error}`);
  });