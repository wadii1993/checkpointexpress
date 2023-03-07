const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
var app = express();

//express route representation pour votre requete dans une path specifie
// app.get("/", (req, res) => {
//   res.send("hhhhhh");
// });

app.use(function (req, res, next) {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();

  if (day > 0 && day < 6 && hour > 9 && hour < 17) {
    next();
  } else {
    res.send(
      "<h1>the web site is only open from monday to friday 10AM to 17PM</h1>"
    );
  }
});
app.use(express.static("pages"));

var PORT = process.env.PORT || 4000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`the server is runnig on ${PORT}`)
);
