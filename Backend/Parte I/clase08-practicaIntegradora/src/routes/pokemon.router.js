import { Router } from "express";
import pokeModel from '../models/pokemon.model.js'

const router = Router();

// Listar Pokemons
router.get('/', async (req, res) => {
    const pokemons = await pokeModel.find().lean().exec();

    console.log('POKEMONS', pokemons)
    res.render('list', { pokemons });
})


// Pagina para crear Pokemons (render HTML)
router.get('/create', async (req, res) => {
    res.render('create', {});
})

// Crear Pokemon
router.post('/create', async (req, res) => {
    const pokemonNew = req.body;
    console.log({ pokemonNew });

    const pokemonGenerated = new pokeModel(pokemonNew);
    await pokemonGenerated.save();

    console.log({ pokemonGenerated });
    res.redirect('/pokemon/' + pokemonGenerated.name)
})


// Obtener un Pokemon (name)
router.get('/:name', async (req, res) => {
    const name = req.params.name;
    res.render('one', {name})
})


// Borrar pokemon


export default router