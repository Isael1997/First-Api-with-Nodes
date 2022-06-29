const {Router} = require('express');
const routermovies = Router();
const movies = require('../sample.json');
const _underscore = require('underscore');

//Ruta para que me de un resultado
routermovies.get('/', (req, res) => {
    
    res.json(movies);
});
//Ruta para recibir datos
 routermovies.post('/', (req, res) => {
    const {title, director, year, reaiting} = req.body;

    if(title && director && year && reaiting){
        const id = movies.length + 1;
        const newmovies = {...req.body, id}
        movies.push(newmovies);
        res.json(movies);
    }else {
        res.status(500).json({"error": "Theare was an error."});
    }
 })
//Ruta para eliminar algun dato
 routermovies.delete('/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    _underscore.each(movies, (m, i) => {
        if(m.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
 });

module.exports = routermovies;
