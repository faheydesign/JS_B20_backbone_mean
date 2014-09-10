var $ = require('jquery');
var BasicMeanView = require('./mean/views/mean');

var basicMeanView = new BasicMeanView();

$('body').html(basicMeanView.$el);
