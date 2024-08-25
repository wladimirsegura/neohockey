import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    console.log(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    console.log(process.env.MONGO_URI);
  }
};

export default connectDB;
