const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();


app.get("/", (req, res) => {
  res.status(200).send("get route working perfectly")
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
