const express = require("express");
const router = express.Router();

const yelp = require("yelp-fusion");

const apiKey =
  "yKXQcJZxG7I6LhxaJ98NINOLDq5giH3u7ENHC4nvN_gGYF2ZEO7AaALsjRs-iYBx_BKuM7u9E0YENfQT3DH_ArwiHRlA-8RnCL1eqdyIQ-yvxjbpmdRk-8ElQ7ArXnYx";

const client = yelp.client(apiKey);

// Get Store Info
router.get("/getStoreInfo", (req, res) => {
  searchRequest = {
    term: req.query.term,
    latitude: req.query.latitude,
    longitude: req.query.longitude
  };
  client.search(searchRequest).then(response => {
    res.json({ success: true, data: response.jsonBody.businesses });
  });
});

module.exports = router;
