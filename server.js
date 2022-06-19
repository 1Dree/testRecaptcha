const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/g-recapcha-assessment", (req, res) => {
  res.json("hello");
});

app.listen(3005, console.log("listening"));
