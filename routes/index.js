module.exports = (app) => {
 
  
  app.use("/", require("./base.routes"))
  app.use("/lugares", require("./place.routes"));
  app.use("/api", require("./api.routes"));
  
};

