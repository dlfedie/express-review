const express = require('express');
const PORT = 5000;

const app = express();

//static file server
app.use(express.static('server/public'));

app.get('/hello', (req, res) => {
    console.log('got to /hello GET');
    res.send('hello world!');
    // res.sendStatus(404);
})


//set up listener
app.listen(PORT, () => {
    console.log('app is running on port:', PORT);
})