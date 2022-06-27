const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require("./routers/index.js");

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routers
app.use(router);

app.listen(app.set('port'), () => {
    console.log('Server on port', app.get('port'));
});