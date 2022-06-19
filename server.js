const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (res, res) => {
  res.json("hello");
});

app.post("/g-recapcha-assessment", (req, res) => {
  res.json("hello");
});

app.listen(precess.env.PORT || 3005, console.log("listening"));
