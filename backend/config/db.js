const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
