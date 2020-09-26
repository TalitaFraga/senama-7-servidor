const filmes = require("../model/pixar_animation.json");

const getAll = (req, res) => {
    console.log(req.url);

    res.send(filmes);
};

const getMovieByYear = (req, res) => {
    const year = req.params.year 
    
    const filmesFiltrados = filmes.filter(filme => {
        return filme.release_year == year
    })
    res.send(filmesFiltrados)
}

const getDirector = (req, res) => {
    const director = req.params.director

    const diretorFiltrado = filmes.filter(filme => {
        return filme.director == director
    })
    res.send(diretorFiltrado)
}

module.exports = { getAll, getMovieByYear, getDirector }