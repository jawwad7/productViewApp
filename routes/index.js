var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/productVisit',productController.saveProductView);
router.get('/getProductDetails',productController.getProductViews);

module.exports = router;
