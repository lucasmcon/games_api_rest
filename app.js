const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//const Game = require("./games/Game");
const gamesController = require("./games/GamesController");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão com banco feita com sucesso.");
    }).catch((err)=>{
        console.log(err);
    });
    
app.use("/", gamesController);

app.listen(8080, ()=>{
    console.log("API IS RUNNING...");
});