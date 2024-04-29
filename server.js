const express = require("express");
const routes = require("./utils/routes");
const app = express();
const PORT = 5500;

app.use(express.json());
routes(app);

app.listen(PORT, function () {
  console.log("Check http://localhost:" + PORT);
});
