module.exports = app => {
    const controller = require("../controllers/controller.user.js");
  
    // var router = require("express").Router();
  
  //   // Create a new Tutorial
  //   router.post("/", users.create);
  
  //   // Retrieve all Tutorials
  //   router.get("/", users.findAll);
  
  //  router.get("/show",users.renderAll);
    
    app.use('/users', controller.showUsers);
    app.use('/table', controller.showTable);
    app.use('/create', controller.create);
    app.use("/",controller.getTables)
  };