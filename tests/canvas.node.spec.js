/* eslint-env node, mocha */

var should = require('should');

var isoCanvas = require('..');

describe('isomorphic canvas node', function () {
  var png3x2 = 'data:image/png;base64,' +
    'iVBORw0KGgoAAAANSUhEUgAAAAMAAAACC' +
    'AYAAACddGYaAAAADklEQVQIW2NkQAKMyB' +
    'wAAEEAAzqc1JUAAAAASUVORK5CYII=';

  it('exports', function () {
    should(isoCanvas).Function();
    should(isoCanvas.getImage).Function();
  });
  
  it('canvas', function () {
    var canvas = isoCanvas(7, 8);
    should(canvas.getContext('2d').toString()).be.eql('[object CanvasRenderingContext2d]');
    should(canvas.width).be.eql(7);
    should(canvas.height).be.eql(8);
  });
  

});
