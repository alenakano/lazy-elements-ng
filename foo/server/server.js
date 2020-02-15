var express = require('express');
var path = require('path');

var app = express();
app.use('/element', express.static(__dirname + '/dist'));
app.listen(3000, () => console.log('Rodando na porta 3000'));