import express from "express";
import apiRouter from "./routes/api.js";
import connection from "./connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: "404_NOT_FOUND" });
});

connection();

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
