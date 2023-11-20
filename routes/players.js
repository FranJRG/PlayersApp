const express = require("express");
/*
  El enrutador es un objeto en el módulo base de Express.
  Este objeto de enrutador tendrá métodos similares (.get, .post, .patch, .delete) al
  objeto de la aplicación que hemos estado utilizando anteriormente.
*/
const router = express.Router();

const players = []; // idealmente, esto sería una base de datos, pero comenzaremos con algo simple
var id = 0; // esto nos ayudará a identificar usuarios únicos

// en lugar de app.get...
router.get("/", (req, res) => {
  return res.json(players);
});

router.get("/:id", (req, res) => {
  const player = players.find(val => val.id === Number(req.params.id));
  return res.json(player);
});

// en lugar de app.post...
router.post("/", (req, res) => {
  const newPlayers={
    name: req.body.name,
    age: req.body.age,
    team: req.body.team,
    id: ++id
  };
  users.push(newPlayers);
  return res.json(newPlayers);
});

// en lugar de app.patch...
router.patch("/:id", (req, res) => {
  const player = players.find(val => val.id === Number(req.params.id));
  player.name = req.body.name;
  return res.json({ message: "Actualizado" });
});

// en lugar de app.delete...
router.delete("/:id", (req, res) => {
  const playerIndex = players.findIndex(val => val.id === Number(req.params.id));
  players.splice(userIndex, 1);
  return res.json({ message: "Eliminado" });
});

// Ahora que hemos construido todas estas rutas, ¡exportemos este módulo para usarlo en nuestro app.js!
module.exports = router;