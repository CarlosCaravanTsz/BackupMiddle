import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    console.log('HOLA MAIN')
    if (req.session?.user) {
        res.redirect('/profile')
    }
    res.render('login', {})
});

router.get('/login', (req, res) => {
    res.render('login', {})
});

router.get("/register", (req, res) => {
  res.render("register", {});
});

function auth(req, res, next) {
    if (req.session?.user) return next()
    res.redirect('/login')
}

router.get("/profile", (req, res) => {
  res.render("profile", {});
});

export default router;