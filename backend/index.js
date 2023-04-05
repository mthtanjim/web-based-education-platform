const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./routes/products");
const category = require("./routes/category");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("Web Based Education Platform");
});

mongoose
  .connect(process.env.DBURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("DB Error = ", err);
  });

//middleware
app.use(morgan("dev"));
app.use(express.json());

//router middleware
app.use("/", authRoutes);
app.use("/products", products);
app.use("/category", category);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
