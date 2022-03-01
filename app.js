const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hello World War III!</h1>");
});

app.listen(PORT, () => console.log("[!] Listening on port " + PORT));
