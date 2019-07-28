var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});
app.set('port', 3000)
app.use('/api', router);
app.use('/images', express.static(__dirname + '/images'))


router.get("/", function (req, res) {
    res.json({ message: 'Logens api' });
});

app.listen(app.get('port'), function (err) {
    if (err) {
        console.log("Failed to start the server on port %d", app.get('port'));
    } else {
        console.log("Server is running on port %d", app.get('port'));
    }
});
