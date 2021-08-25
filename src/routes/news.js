const express = require('express');
const router = express.Router();

const newController = require('../app/newscontroller/NewsController');

// đọc tuyến đường từ trên xuống nên phải sắp xếp đường con trước

router.use('/:slug', newController.show);
router.use('/', newController.index);

module.exports = router;
