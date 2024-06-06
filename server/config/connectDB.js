const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "DevDb",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    const connection = mongoose.connection;
    connection.on("connected", () => console.log("Connected to MongoDB"));
    connection.on("error", () => console.log("Error connecting to MongoDB"));
    connection.on("disconnected", () =>
      console.log("Disconnected from MongoDB")
    );

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
