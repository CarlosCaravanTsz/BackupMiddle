import { Router } from 'express'

const router = Router();
const pets = [];

router.use((req, res, next) => { // AGREGANDO CUSTOMED MIDDLEWARE A NIVEL ROUTER
    console.log('Esto es solo de mascotas');
    next();
})


router.get('/', (req, res) => {
    res.send({ pets, data: req.data })
});

router.post('/', (req, res) => {
    const pet = req.body;
    pets.push(pet);

    res.send({ status: 'success' });
});

export default router