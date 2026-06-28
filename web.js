const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const port = process.env.PORT || 8080;
const server = app.listen(port);

server.on("listening", () => {
  console.log(`Listening on ${port}`);
});

server.on("error", (err) => {
  console.error(err.message);
  process.exit(1);
});
