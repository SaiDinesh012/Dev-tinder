const express = require('express');
const app = express();

app.get("/di", (req, res) => {
    res.send("hi sai");
});

app.listen(3000, () => {
    console.log("I am listening at 3000");
});
