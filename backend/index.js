const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./routes/products");
const mongoose = require("mongoose");

dotenv.config();

app.use("/products", products);

app.get("/", (req, res) => {
  res.status(200).send("get route working perfectly");
});

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("DB Error = ", err);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
