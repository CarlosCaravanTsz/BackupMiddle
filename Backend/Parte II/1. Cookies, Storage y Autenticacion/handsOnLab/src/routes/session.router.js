import { Router } from 'express';
import userModel from '../models/user.model.js';

const router = Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) return res.redirect('/');

    req.session.user = user;
    return res.redirect('/profile')
});

router.post("/register", async (req, res) => {
    const user = req.body;
    await userModel.create(user);

  return res.redirect("/");
});


export default router;