import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("db connected successfully");
  });
  console.log(process.env.DB_URI);
  await mongoose.connect(`${process.env.DB_URI}`);
};

export default connectDb;
