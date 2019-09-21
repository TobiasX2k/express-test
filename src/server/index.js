const express = require('express');
const app = express();
const routes = require('../routes/router');
console.log('I ran successfully');

app.use('/',routes);
app.set('port', process.env.PORT ? process.env.PORT : 3124);
app.listen(app.get('port'), () => {
    console.log(`app listening on port ${app.get('port')}`);
});

