import express from 'express'

const app = express();

const users = [
    {gender:'male', id: 1, name: 'Eri' },
    {gender:'male', id: 2, name: 'Augusto' },
    {gender:'male', id: 3, name: 'Carlitos' },
    {gender:'male', id: 4, name: 'Valentin' },
    {gender: 'female', id: 5, name: 'Ileana' },
    {gender: 'female', id: 6, name: 'Silvia' },
];

app.get('/', (req, res) => {
    let genderSentByUser = req.query.gender;
    
    if (genderSentByUser) {
        genderSentByUser = genderSentByUser.toLowerCase();
        const userFiltered = users.filter(u => u.gender === genderSentByUser);
        return res.send(userFiltered)
    }
    res.send(users);
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const user = users.find((u) => u.id === id);

    if (!user) res.send({ error: 'User not found' })
    else res.send(user);
});


app.listen(8080);



/////////////////