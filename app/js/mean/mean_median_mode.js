'use strict';
var mmm = {

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
        }else if (countArr[prop] > countArr[answer]){
          answer = prop;
        }else{
          answer = 'none';
        }
      }
    }
    return answer;
  }
};

module.exports = mmm;
