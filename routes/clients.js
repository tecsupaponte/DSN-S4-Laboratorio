var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('clients', {clients: ["Javier Aponte", "Nicolás Fuentes", "Alfonso Spínola"]});
});

module.exports = router;
