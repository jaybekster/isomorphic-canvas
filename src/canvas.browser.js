(function (root, factory) {
  /* istanbul ignore next */
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define('isomorphic-canvas', factory);
  } else {
    // Global Variables
    root['isomorphic-canvas'] = factory();
  }
}(this, function () {
  /**
   *
   * @param {number} width - px
   * @param {number} height - px
   * @return {HTMLCanvasElement}
   */
  function canvas(width, height) {
    var canvasEl = document.createElement('canvas');
    canvasEl.width = width;
    canvasEl.height = height;
    return canvasEl;
  }

  /**
   *
   * @param {String} url
   * @param {Function} callback
   * @return {Image}
   */
  function createImg(url, callback) {
    var img = new Image();
    img.onload = function () {
      callback(null, img);
    };
    img.onerror = function () {
      callback(new Error('Cannot load img ' + url));
    };
    img.src = url;
    return img;
  }

  /**
   *
   * @param {String} url - or base64
   * @param {Function} callback
   */
  canvas.getImage = function getImage(url, callback) {
    createImg(url, callback);
  };

  canvas.getImageSync = function getImageSync(url, callback) {
    return createImg(url, callback);
  };

  return canvas;
}));


