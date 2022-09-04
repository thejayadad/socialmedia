

const express = require("express");
const app = express();
const path = require("path");
const Story = require("./models/post")


app.use(express.static("public"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.get("/", async (req, res) => {
    const story = await Story.find({})
    res.render("home")
})


app.listen(3100, () => {
    console.log("We are going on the port")
})