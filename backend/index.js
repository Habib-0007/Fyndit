const express = require("express");
require("dotenv").config();
const queryRoute = require("./routes/queryRoute");

const app = express();

app.use(express.json())
const PORT = process.env.PORT || 5000;

app.use("/api", queryRoute);

app.listen(PORT, () => {
  console.log(`Application starts on PORT ${PORT}`);
});

module.exports = app;
