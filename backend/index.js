require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const NodeCache = require("node-cache");

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;
const cache = new NodeCache({
  stdTTL: 600,
});

app.get("/api/news", async (req, res) => {
  const cachedNews = cache.get("headLines");

  if (cachedNews) {
    return res.json(cachedNews);
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );

    const headLines = response.data.articles;
    cache.set("headLines", headLines);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mesaage: "Failed to retrieve news" });
  }
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
