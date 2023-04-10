const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");


const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const { register } = require("./controller/auth");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.post("/auth/register", register);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// mongoose.connect('mongodb://0.0.0.0:27017/safcom').then(()=>console.log('db connected')).catch((err)=>console.log(err.message))

// mongodb://0.0.0.0:27017/social
mongoose.set("strictQuery", false);


mongoose.connect('mongodb+srv://social:social@cluster0.by9sszx.mongodb.net/social?retryWrites=true&w=majority').then(() =>
  app.listen(5000, () => {
    console.log("connected");
  })
).catch((error)=>console.log(error));
