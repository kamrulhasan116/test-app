var express = require('express');
var router = express.Router();

/* GET home page.get request */
router.get('/', function(req,res,next){
  console.log(req.headers);
  next();
},
 function(req, res, next) {
  console.log(req.headers);
  res.json( {'message':'hellow world & kamrul'});
});

/* GET home page.post request */
router.post('/users', function (req,res){
  res.json(req.body);
})

module.exports = router;
