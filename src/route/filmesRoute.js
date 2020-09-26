const express = require ('express');

const router = express.Router();
const controller = require('../controller/filmesController')

router.get ("/", controller.getAll);
router.get("/search_year/:year", controller.getMovieByYear);
router.get("/search_director/:director", controller.getDirector);

module.exports = router