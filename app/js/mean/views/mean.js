'use strict';
// Form View
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var FormView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'submit' : 'submitFunction'
  },
  submitFunction: function(e){
    var num1 = this.$el.find('input[name="one"]').val();
    var num2 = this.$el.find('input[name="two"]').val();
    var num3 = this.$el.find('input[name="three"]').val();
    var mean = this.meanFunction(num1,num2,num3);
    this.$el.append('The mean is ' + mean + '<br/><br/>');
    e.preventDefault();
  },
  meanFunction: function(num1,num2,num3){
    var arr   = [num1,num2,num3],
        len   = arr.length,
        total = 0;

    for (var i = 0; i < len; i++) {
       total += parseInt(arr[i]);
    }
    return total / len;
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
