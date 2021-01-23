const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController')

router.get('/', (req, res, next) => {
 
  res.json({message: 'homepage routes'});
});

router.get('/api', homeController.getNews);

module.exports = router;