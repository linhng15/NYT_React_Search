// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to NYT.
  runQuery: function(data) {

    console.log(data);

    // Figure out the geolocation
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postArticles: function(data) {
    return axios.post("/api", { data: data });
  }
};

// We export the API helper
module.exports = helper;
