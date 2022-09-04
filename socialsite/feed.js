const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Story = require("./models/post")

const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/story", (req, res) => {
    res.send("Story will be here")
})


const stuff = new Story ({
    caption: "Im tired",
    username: "thejayadad",
    userId: "{ type: String }",
    image: "https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: String,
    likes: 1,
})
stuff.save().then(stuff => {
    console.log(stuff)
})
.catch(e => {
    console.log(e);
})

app.listen(5000, () => {
    console.log("We are going on the port")
})