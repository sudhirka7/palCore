const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const db = require("./config/db");

// Connect to database
db();

const app = express();

// Set EJS as templating engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.static(path.join(__dirname, "public"))); // for static files like CSS, images, JS

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

// about section
app.get("/aboutpalCore", (req, res)=>{
    res.render("about.ejs");
});
// about section
app.get("/servicepalCore", (req, res)=>{
    res.render("service.ejs");
});

app.get("/gallerypalCore", (req, res)=>{
    res.render("gallery.ejs");
});
app.get("/contactpalCore", (req, res)=>{
    res.render("contact.ejs");
});

// Start server
app.listen(8080, () => {
    console.log("App listening on port number 8080");
});
