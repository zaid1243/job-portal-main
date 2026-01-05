import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("db connected successfully");
  });
  await mongoose.connect(`mongodb://localhost:27017/job-portal`);
};

export default connectDb;
