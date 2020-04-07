let express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    path        = require('path'),
    session     = require('express-session'),
    body_parser = require('body-parser');

app.use(body_parser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(path.join(__dirname, "static")));
app.use(session({
    secret: 'boobies',
    proxy: true,
    resave: false,
    saveUninitialized: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/rachel');
mongoose.Promise = global.Promise;

let Schema = mongoose.Schema;

// app.get('/about', (req, res) => {
//     res.json
// })

let server = app.listen(6789, () => {
    console.log("listening on port 6789");
});