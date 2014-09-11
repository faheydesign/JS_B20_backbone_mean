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
    var self = this.$el;
    var num1 = self.find('input[name="one"]').val();
    var num2 = self.find('input[name="two"]').val();
    var num3 = self.find('input[name="three"]').val();
    var mean = this.meanFunction(num1,num2,num3);
    var median = this.median(num1,num2,num3);
    var mode = this.mode(num1,num2,num3);

    self.append('The mean is ' + mean + '<br/><br/>');
    self.append('The median is ' + median + '<br/><br/>');
    self.append('The mode is ' + mode + '<br/><br/>');

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
  median: function(num1,num2,num3){
    var arr   = [num1,num2,num3],
    result, first, second;

    // put the numbers in order
    arr.sort(function(a, b) {
        return a - b;
    });

    first = ( arr.length - 1 ) / 2;

    if ( arr.length % 2 === 0 ) {
      second = first + 1;
      result = (arr.slice(first, second) * 1 + arr.slice(second, second + 1) * 1) / 2;
    } else {
      result = arr[first];
    }

    return result;
  },
  mode: function(num1,num2,num3){
    var arr   = [num1,num2,num3],
    countArr = {},
    num,
    answer;

    for (var i = 0; i < arr.length; i++) {
      num = parseInt(arr[i]);
      countArr[num] ? countArr[num]++ : countArr[num] = 1;
    }

    for (var prop in countArr) {
      if(countArr.hasOwnProperty(prop)){
        if (countArr[prop] > 1 && answer === undefined){
          answer = prop;
          console.log("greater than and undefined");
        }else if (countArr[prop] > countArr[answer]){
          answer = prop;
          console.log("greater than and answer");
        }else{
          answer = "none";
        }
      }
    }
    return answer;
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
