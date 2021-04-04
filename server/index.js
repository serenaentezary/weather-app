require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json()); // req.body

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("listening");
});