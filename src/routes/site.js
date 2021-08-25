const express = require('express');
const router = express.Router();

const siteController = require('../app/newscontroller/SiteController');

// đọc tuyến đường từ trên xuống nên phải sắp xếp đường con trước

router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
