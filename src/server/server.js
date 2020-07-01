const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const serveStatic = require("serve-static");

mongoose.set("useUnifiedTopology", true);

// routes
const store = require("./routes/store");
const tea = require("./routes/tea");
const topping = require("./routes/topping");
const yelp = require("./routes/yelp");

// Connect to Mongo Database
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, dbName: process.env.DB_NAME }
);

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

// On Error
mongoose.connection.on("error", (err) => {
  console.log("Database error " + err);
});

// Initialize app variable with express
const app = express();

// Port Number
const port = process.env.PORT || 8080;

// CORES Middleware
app.use(cors());

// Set Static Folder
//app.use(express.static(path.join(__dirname, "../../src")));
app.use(express.static(path.join(__dirname, "../../dist")));

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/stores", store);
app.use("/teas", tea);
app.use("/toppings", topping);
app.use("/yelp", yelp);

//app.use(serveStatic(__dirname + "../../src"));
app.use(serveStatic(__dirname + "../../dist"));

app.listen(port);
console.log("server started " + port);
