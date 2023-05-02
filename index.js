const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./data/chefs.json");
const chefsRecipes = require("./data/chefsRecipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(`
  <h1 style="text-align:center; margin-top:5rem">
      It's a Backed Server of 
      <b style="color:red;padding:2rem">Indian Tadka</b> Site !
      <br/><br/>
      Site Port : <b style="color:red"> ${port} </b>
  </h1>`);
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/chef", (req, res) => {
  res.send(chefsRecipes);
});

app.listen(port, () => {
  console.log(`Indian Tadka ${port}`);
});
