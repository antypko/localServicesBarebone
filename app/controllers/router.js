var express = require('express')
    , router = express.Router();

router.use('/api/service_providers', require('./serviceProviderList'));

router.get('', function (req, res) {
    res.sendfile('./../../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;