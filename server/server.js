require("dotenv").config();
const express=require("express");
const app= express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postsRoutes = require("./routes/addPosts");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);//Register
app.use("/api/auth", authRoutes);//Login
app.use("/api/addPosts",postsRoutes);//For adding and displaying posts of user

const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));