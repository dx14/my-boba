const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const serveStatic = require("serve-static");

mongoose.set("useUnifiedTopology", true);

// routes
const store = require("./routes/store");
const tea = require("./routes/tea");
const topping = require("./routes/topping");
const yelp = require("./routes/yelp");

// Connect to Mongo Database
mongoose.connect(
  config.database,
  { useNewUrlParser: true, dbName: "myboba" }
);

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
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
// change to ../../src for local
app.use(express.static(path.join(__dirname, "../../dist")));

// Body Parser Middleware
app.use(bodyParser.json());

app.use("/stores", store);
app.use("/teas", tea);
app.use("/toppings", topping);
app.use("/yelp", yelp);

// change to ../../src for local
app.use(serveStatic(__dirname + "../../dist"));

app.listen(port);
console.log("server started " + port);
