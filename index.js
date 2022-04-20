const express = require("express");
const app = express();
// I created an endpoint, whenever we visit this endpoint we will get this message
app.get("/", function (req, res) {
  res.send("My name is Amr Alshaaba, IT IS WORKING!!!");
});

app.listen(process.env.PORT || 5000);
