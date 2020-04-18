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
/*
var DB = {
    games:[
        {
            id: 1,
            nome: 'The Last of Us',
            year: 2013,
            price: 150
        },
        {
            id: 2,
            nome: 'GTA V',
            year: 2013,
            price: 200
        },
        {
            id: 3,
            nome: 'Red Dead Redemption 2',
            year: 2018,
            price: 200
        }
    ]
}

app.get("/games", (req,res)=>{
    res.statusCode =  200;
    res.json(DB.games);
});
*/
app.listen(8080, ()=>{
    console.log("API RODANDO");
});