const path = require("path");
const express = require("express");
const app = express();
PORT = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});


app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});