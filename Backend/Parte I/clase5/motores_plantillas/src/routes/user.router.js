import { Router } from 'express'

const router = Router();

const users = [
    { name: "Valentin", lastname: 'Abalo', age: 30, admin: true, },
    { name: "Carolina", lastname: 'Gavatorta', age: 21, admin: false },
    { name: "Gabriel", lastname: 'Ledesma', age: 34, admin: true },
    { name: "Emperador", lastname: 'Javier', age: 36, admin: false},
];

router.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 4);
    res.render('list', { users, css: 'users' })
});

export default router