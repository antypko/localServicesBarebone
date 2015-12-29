var express = require('express');
var ServiceProvider = require('./../models/serviceProvider');
var router = express.Router();

router.get('/', function(req, res) {
    // use mongoose to get all service_providers in the database
    ServiceProvider.find(function (err, service_providers) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err);

        res.json(service_providers); // return all service_providers in JSON format
    });
});

router.get('/:id', function(req, res) {
    // use mongoose to get all service_providers in the database
    ServiceProvider.findById(req.params.id, function (err, service_provider){
        if (err)
            res.send(err);

        res.json(service_provider); // return all service_providers in JSON format
    });
});

router.post('/', function (req, res) {
    // create a service_provider, information comes from AJAX request from Angular
    ServiceProvider.create({
        name: req.body.name,
        done: false
    }, function (err, service_provider) {
        if (err)
            res.send(err);
        // get and return all the service_providers after you create another

        ServiceProvider.find(function (err, service_providers) {
            if (err)
                res.send(err);
            res.json(service_providers);
        });
    });
});

router.delete('/:sp_id', function (req, res) {
    ServiceProvider.remove({
        _id: req.params.sp_id
    }, function (err, service_provider) {
        if (err)
            res.send(err);
        // get and return all the service_providers after you create another
        ServiceProvider.find(function (err, service_providers) {
            if (err)
                res.send(err);
            res.json(service_providers);
        });
    });
});

module.exports = router;