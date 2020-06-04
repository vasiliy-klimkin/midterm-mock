const PORT = 8080;
const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.json({status: 'ok'});
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
