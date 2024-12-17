const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//Cofeeを選択した場合
app.get('/teapot', (req, res) => {
    res.status(418);
    res.sendFile(__dirname + '/public/showTeapotRes.html');
});

//Teaを選択した場合の表示
app.get('/you-are-correct', (req, res) => {
    res.status(200);
    res.sendFile(__dirname + '/public/nomal.html');
});

app.listen(port, () => {
    console.log('Server is runnning');
});