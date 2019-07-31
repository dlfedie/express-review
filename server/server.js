let express = require('express');
const PORT = 5000;

let app = express();
app.use(express.static('server/public'));



app.listen(PORT, () => {
    console.log('app is running on port:', PORT);
})