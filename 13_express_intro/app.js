const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false })); //to parse data from the url

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'><button>Submit</button></form>"
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  existingUsers.push(userName);
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored as " + userName + "</h1>");
});


app.get('/users', function (req, res){

  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  
  let listElement = "<ul>";
  for (let user of existingUsers){
    listElement += "<li>" + user + "</li>";
  }
  listElement += "</ul>";
  res.send("<h1>Stored Users: </h1>" + listElement);
});

app.listen(3000);
