// Form View
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var FormView = Backbone.View.extend({
  tagName: 'div',
  events: {
    'submit' : 'meanFunction'
  },
  meanFunction: function(e){
    // this.model.meanFunction();
    console.log("submit");
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
