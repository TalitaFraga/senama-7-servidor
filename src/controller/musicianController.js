const musician = require ("../model/musician.json");

const getAll = (req, res) => {
    console.log(req.url)

    res.send(musician);
};

module.exports = { getAll }