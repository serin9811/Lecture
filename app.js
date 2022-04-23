const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config({ path: "./.env.local" });
const { PORT } = process.env;
const router = require("./routers");
const { swaggerUi, specs } = require("./modules/swagger");
const app = express();
const port = PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("common"));
app.use("/v1", router);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/api`);
});
