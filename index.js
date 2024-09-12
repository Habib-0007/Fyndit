const express = require("express");
const path = require("path");
require("dotenv").config();
const queryRoute = require("./routes/queryRoute");

const app = express();

app.use(express.static(path.join(__dirname, "public"), setHeaders: res => {
  res.setHeader('Cache-Control', 'no-cache');
}));

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", queryRoute);

app.use((req, res, next) => {
  res.status(404).send("404: File Not Found");
});

app.listen(PORT, () => {
  console.log(`Application starts on PORT ${PORT}`);
});

module.exports = app;
