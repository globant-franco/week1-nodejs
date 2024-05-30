// ENV file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose"); // ORM for Mongo
const app = require("./app");

// Database configuration
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

// Server configuration
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
