'use strict';

var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var MeanView = require('../../../app/js/mean/views/mean');

describe('Backbone Mean View', function() {
  before(function(done) {
    sinon.spy(MeanView.prototype, 'render');
    done();
  });

  it('should call render on creation', function(done) {
    this.meanView = new MeanView();
    expect(MeanView.prototype.render.called).to.be.true;
    done();
  });

  it('should not be empty', function(done) {
    expect(this.meanView.$el).to.not.eql('');
    done();
  });

  after(function(done) {
    MeanView.prototype.render.restore();
    done();
  });
});
