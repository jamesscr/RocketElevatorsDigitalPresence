console.log('hello');
const express = require('express');
const app = express();
app.get("/", (req, res)=> {
    res.send("Hello World");
});
// PORT
const port = process.env.PORT || 3000/public;
app.listen(port, () => console.log(`Listening on port ${port}...`))
app.use(express.static('/public'));
//app.use(express.static('RocketElevatorsDigitalPresence/quotecalc.html'));
//app.listen(3000, () => console.log('listening at 3000'));
//app.use(express.static('.\quote.html'));