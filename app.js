const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routers");
const { swaggerUi, specs } = require("./modules/swagger");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("common"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
