import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(
      `Connected to Mongo Database ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in MongoDB  --${error}`.bgWhite.red);
  }
};

export default connectDB;
