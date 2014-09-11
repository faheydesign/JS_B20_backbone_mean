'use strict';
// Form View
var Backbone = require('backbone');
var $ = require('jquery');
var mmm = require('../mean_median_mode');
Backbone.$ = $;

var FormView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'submit' : 'submitFunction'
  },
  submitFunction: function(e){
    var self = this.$el;
    var num1 = self.find('input[name="one"]').val();
    var num2 = self.find('input[name="two"]').val();
    var num3 = self.find('input[name="three"]').val();
    var mean = mmm.meanFunction(num1,num2,num3);
    var median = mmm.median(num1,num2,num3);
    var mode = mmm.mode(num1,num2,num3);

    self.append('The mean is ' + mean + '<br/><br/>');
    self.append('The median is ' + median + '<br/><br/>');
    self.append('The mode is ' + mode + '<br/><br/>');

    e.preventDefault();
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    var template = require('../templates/basic-form-template.hbs');
    this.$el.html(template);
    return this;
  }
});

module.exports = FormView;
