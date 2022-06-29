const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require("./routers/index.js");
const routermovies = require("./routers/movies.js");
const routerusers = require("./routers/user.js");


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routers
app.use(router);
app.use('/api/movies', routermovies);
app.use('/api/users', routerusers);

app.listen(app.set('port'), () => {
    console.log('Server on port', app.get('port'));
});