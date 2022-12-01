const { json } = require("body-parser");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const schemaJson = require( './../models/schema.json')
const moment = require("moment");
const { col } = require("sequelize");
const { DB } = require("../db.config");


exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const user = {
    firstname: req.body.firstname,
    surname: req.body.surname,
    birthdate: req.body.birthdate ,
    email:req.body.email
  };

  // Save Tutorial in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.showUsers = (req,res) =>{
  User.findAll()
      .then(data => {
        res.render("pages/users",{users:data})
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}
exports.findAll = (req, res) => {
    const title = req.query.title;
    
  
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.getTables = (req,res)=>{
  db.sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {

    console.log(JSON.stringify(tableObj))
    res.render("pages/dashboard",{tables:tableObj})
  }).catch((err) => {
    console.log('showAllSchemas ERROR',err);
})
}

exports.showTable= async (req,res)=>{
  var table = req.body.table;
  const queryString = "SELECT * FROM " + table
 const data =  await db.sequelize.query(queryString, {type: db.sequelize.QueryTypes.SELECT});
var columns = Object.keys(data[0])
var actionForm = "add" + table
res.locals.moment = moment;
 for(var i in data){

    console.log(data[i]['firstname'])

 }

  res.render("pages/table",{actionForm:actionForm,schemaJson:schemaJson,table:table,columns:columns,data:data})

}


exports.create= async (req,res)=>{
  
  const formData = req.body;
  const table = formData.table;

  

  columns = Object.keys(formData);

  var queryStringColumns = JSON.stringify(columns).replace(/\"/g, "").replace("[","").replace("]","").replace(",table","") 

  var query = "INSERT INTO  " + table + " (" + queryStringColumns + ") VALUES (";
  values = JSON.stringify(Object.values(formData)).replace("[","").replace("]","").replace(',"users"',"")


  query= query+ values + ")"

  await db.sequelize.query(query);

  console.log(query)
  
  res.send(req.body.name)
}