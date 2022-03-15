const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = 3000;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Lecture API",
      version: "1.0.0",
      description:
        "REST API which is about lecture providing service such as Udemy with express",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
    host: `localhost:${port}`,
    basePath: "/",
  },
  apis: ["./routers/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs,
};
