const express = require("express");
const app = express();

app.get("/page", (request, response) => {
  response.sendfile("./page.html", { root: __dirname });
});

app.listen(3000);
