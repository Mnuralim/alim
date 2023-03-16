import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/UserRoute.js";

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://alimnur:muhammad04@cluster0.g9s4csw.mongodb.net/alim?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("database connected..."));

app.use(express.json());
app.use(cors());

app.use(userRoute);

app.listen(5000, () => console.log("server is running..."));
