const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    info: {
      title: "Lecture API",
      version: "1.0.0",
      description: "Lecture API with express",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: ["./router/*.js", "./swagger/*"],
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs,
};
