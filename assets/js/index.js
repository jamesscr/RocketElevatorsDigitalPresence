const express = require("express");
const app = express();

app.get("./", (req, res)=> {
    res.send("Hello World!!!!!!");
});
app.use(express.static('public'));

// PORT
app.listen(3000, () => console.log('Listening on 3000'));