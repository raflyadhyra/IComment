import mongoose from "mongoose";

const connection = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "comment",
    useNewUrlParser: true,
  });

  const con = mongoose.connection;
  con.on("error", console.error.bind(console, "connection error :"));
  con.once("open", () => {
    console.log(`connected to mongoDB`);
  });
};

export default connection;
