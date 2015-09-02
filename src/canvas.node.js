var fs = require('fs');
var path = require('path');

var Canvas = require('canvas');
var Image = Canvas.Image;

var imageProvider = null;
/**
 *
 * @param {number} width - px
 * @param {number} height - px
 * @return {HTMLCanvasElement}
 */
function canvas(width, height) {
  return new Canvas(width, height);
}

var base64Str = 'base64,';

function createImg(buffer) {
  var img = new Image();
  img.src = buffer;
  return img;
}

/**
 *
 * @param {String} url - or base64
 * @param {Function} callback
 * @return {Image}
 */
canvas.getImage = function getImage(url, callback) {
  var start = url.substr(0, 5);
  if (start === 'data:') {
    process.nextTick(function () {
      var from = url.indexOf(base64Str) + base64Str.length;
      var buffer = new Buffer(url.substr(from), 'base64');
      callback(null, createImg(buffer));
    });
  } else {
    imageProvider.getImage(url, callback);
  }
};

canvas.setImageProvider = function (imgProvider) {
  imageProvider = imgProvider;
};

function FSImageProvider(rootPath) {
  this.root = rootPath;
}
canvas.FSImageProvider = FSImageProvider;

FSImageProvider.prototype.getImage = function getImage(url, callback) {
  var filePath = path.join(this.root, url);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    var img = createImg(data);
    callback(null, img);
  });
};


global.window = global.window || {};
global.window.requestAnimationFrame = function (cb) {
  cb();
};

module.exports = canvas;
