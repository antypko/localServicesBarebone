var mongoose = require('mongoose');

module.exports = mongoose.model('serviceProviders', { name : String, description : String }, 'serviceProviders');