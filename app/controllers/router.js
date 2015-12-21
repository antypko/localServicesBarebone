var express = require('express'),
    router = express.Router();
router.use('/api/service_providers', require('./serviceProviderList'));

router.get('/', function (req, res) {
    res.render('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

router.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render(name + '.html');
});

module.exports = router;