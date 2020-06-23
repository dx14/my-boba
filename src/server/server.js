const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

mongoose.set("useUnifiedTopology", true);

// routes
const store = require("./routes/store");
const tea = require("./routes/tea");
const topping = require("./routes/topping");
const yelp = require("./routes/yelp");

// Connect to Mongo Database
mongoose.connect(config.database, { useNewUrlParser: true, dbName: "myboba" });

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});

// On Error
mongoose.connection.on("error", err => {
  console.log("Database error " + err);
});

// Initialize app variable with express
const app = express();

// Port Number
const port = process.env.PORT || 8080;

// CORES Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, "/public")));

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/stores", store);
app.use("/teas", tea);
app.use("/toppings", topping);
app.use("/yelp", yelp);

// Index Route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

// All other routes go to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//Start Server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
