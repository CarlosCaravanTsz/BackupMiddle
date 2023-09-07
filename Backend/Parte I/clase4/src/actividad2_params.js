import express from 'express'

const app = express();

const users = [
    { id: 1, name: 'Eri' },
    { id: 2, name: 'Augusto' },
    { id: 3, name: 'Carlitos' },
    { id: 4, name: 'Valentin' },
];

app.get('/', (req, res) => {
    res.send(users);
    
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const user = users.find((u) => u.id === id);

    if (!user) res.send({error: 'User not found'})
    else res.send(user);
})

app.listen(8080);