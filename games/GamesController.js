const express = require("express");
const router = express.Router();
const Game = require("./Game");

router.get("/games", (req, res) => {
    Game.findAll({
        order:[
            ['id', 'DESC']
        ]
    }).then(games => {
        res.json(games);
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;