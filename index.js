const express = require('express');
const app = express();

const port = 8056;

// use express router
app.use('/', require('./routes'));

app.listen(port, (err) => {
    if (err) console.log(`Error starting the server ${err}`);
    console.log(`Server is running on localhost:${port}`);
})