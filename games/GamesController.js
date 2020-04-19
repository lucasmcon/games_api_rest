const express = require("express");
const router = express.Router();
const Game = require("./Game");

router.get("/games", (req, res) => {
    Game.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(games => {
        res.json(games);
    }).catch((err) => {
        console.log(err);
    })
});

router.get("/game/:id", (req, res) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.send({ message: 'ID INVÁLIDO', status_code: 400 });
        //res.sendStatus(400);
    } else {
        Game.findByPk(id).then(game => {
            if (game != undefined) {
                res.json(game);
            } else {
                res.send({ message: 'REGISTRO NÃO ENCONTRADO', status_code: 404 });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
});

router.post("/game", (req, res) => {
    
    var {title, price, year} = req.body;

    if (isNaN(price) || price == "") {
        res.send({message: 'PRICE: VALOR INFORMADO INVÁLIDO', status_code: 400});
    }

    if (isNaN(year) || year == "") {
        res.send({message: 'YEAR: VALOR INFORMADO INVÁLIDO', status_code: 400});
    }

    if (title == undefined || title == "") {
        res.send({message:'TITLE: VALOR INFORMADO INVÁLIDO', status_code: 400});
    }
    
    Game.create({
        title: title,
        price: price,
        year: year
    }).then(() => {
        res.send({message: 'REGISTRO INSERIDO COM SUCESSO', status_code: 201});
    }).catch((err) =>{
        res.send({message: err, status_code: 400})
    });
});

router.put("/game/:id", (req, res) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.send({ message: 'ID INVÁLIDO', status_code: 400 });
    } else {
        Game.findByPk(id).then(game => {
            if (game != undefined) {
                
                var {title, price, year} = req.body;
                
                if (title == undefined) {
                    res.send({message: 'TITLE: VALOR INFORMADO INVÁLIDO', status_code: 400});
                }else if (title == "") {
                    title = game.title;
                }

                if (isNaN(price)) {
                    res.send({message: 'PRICE: VALOR INFORMADO INVÁLIDO', status_code: 400});
                } else if (price == ""){
                    price = game.price;
                }
                
                if (isNaN(year)) {
                    res.send({message: 'YEAR: VALOR INFORMADO INVÁLIDO', status_code: 400});
                } else if (year == "") {
                    year = game.year;
                }

                Game.update({title: title, price: price, year: year},{
                    where: {
                        id: id
                    }
                }).then(() => {
                    res.send({message: `REGISTRO ID:${id} ATUALIZADO COM SUCESSO`, status_code: 200})
                })
            } else {
                res.send({ message: 'REGISTRO NÃO ENCONTRADO', status_code: 404 });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
});

router.delete("/game/:id", (req, res) =>{
    var id = req.params.id;

    if (isNaN(id) || id === "") {
        res.send({ message: 'ID INVÁLIDO', status_code: 400 });
        //res.sendStatus(400);
    } else {
        Game.findByPk(id).then(game => {
            if (game != undefined) {
                Game.destroy({
                    where: {
                        id: id
                    }
                }).then(() => {
                    res.send({message: `REGISTRO ID:${id} DELETADO COM SUCESSO`, status_code: 200});
                });
            } else {
                res.send({ message: 'REGISTRO NÃO ENCONTRADO', status_code: 404 });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
});

module.exports = router;