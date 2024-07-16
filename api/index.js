const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/name', (req, res) => {
    res.json({ name: 'Jeiberth Malagon' });
});

app.get('/skills', (req, res) => {
    res.json({ skills: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Express'] });
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
