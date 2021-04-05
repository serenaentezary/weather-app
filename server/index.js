require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json()); // req.body

const PORT = process.env.PORT || 3001;

app.get("/api", async(req, res) => {
  try {
    return res.send({ key: process.env.GOOGLE_MAPS_API_KEY });
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log('listening');
});