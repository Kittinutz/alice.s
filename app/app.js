const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const item = [
  {
    name: "เคสไอโฟนรูปหมีแพนด้าตาหมีพู",
    quantity: 10,
  },
];

app.get("/favourite", async (req, res) => {
  const favourites = await db.ItemFavorite.findAll();
  res.send(favourites);
});

app.post("/favourite", async (req, res) => {
  const payload = req.body;
  const ItemFavorite = await db.ItemFavorite.create(payload);
  res.send(ItemFavorite);
});

app.listen(8080, () => {
  console.log("server is on");
});
