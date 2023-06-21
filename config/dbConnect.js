import mongoose, { mongo } from "mongoose";
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("connected to database successfully"))
    .catch((err) => console.log("failed to to connect to database", err));
};

export default dbConnect;
