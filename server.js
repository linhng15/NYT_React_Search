// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require History Schema
var History = require("./models/History");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles

 //* `/api/saved` (post) - your components will use this to save an article to the database

 //* `/api/saved` (delete) - your components will use this to delete a saved article in the database

 //* `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes



// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api/saved", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api/store", function(req, res) {
  // console.log("BODY: " + req.body.location);

  // // Here we'll save the location based on the JSON input.
  // // We'll use Date.now() to always get the current date time
  // Article.create({
  //   title: req.body.title,
  //   date: Date.now()
  // }, function(err) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send("Saved Search");
  //   }
  // });
});

app.post("/api/delete/:id", function(req, res) {
  
  // Article.findOne({"_id: req.params.articleId"
  // }, function(err) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     res.send("delete article");
  //   }
  // });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
