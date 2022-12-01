const Sequelize = require("sequelize");
const express = require("express")
const cors = require("express")
const app = express()
app.set('view engine', 'ejs');
var corsOptions = {
  origin:"http://localhost:8080"
}
app.use(cors(corsOptions));

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



require("./routes/route.user")(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
  console.log("App is running")
})


