
import { Router } from 'express'; // sacamos el metodo Router de express y lo guardamos en una variable con el mismo nombre (destructuring)

const router = Router();
const users = [];


router.get('/', (req, res) => {
    res.send({ users, data: req.data  || 'No data' });
});


router.get('/user', (req, res) => res.send('Devuelve todos los users'));


router.post('/', (req, res) => {
    let user = req.body;
    users.push(user);

    res.send({status: 'success'})
})



//module.exports = router
export default router; // al usar default podemos nombrar el modulo como queramos en el archivo donde importamos