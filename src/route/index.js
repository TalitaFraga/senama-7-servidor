const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Filmes de animação da pixar",
        data: "25/09/2020"
    })
});

module.exports = router;