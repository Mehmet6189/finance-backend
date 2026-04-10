const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend çalışıyor 🚀");
});

app.listen(10000, () => {
  console.log("Server running");
});
