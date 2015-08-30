var Canvas = require('canvas');
/**
 *
 * @param {number} width - px
 * @param {number} height - px
 * @return {HTMLCanvasElement}
 */
function canvas(width, height) {
  return new Canvas(width, height);
}

global.window = global.window || {};
global.window.requestAnimationFrame = function (cb) {
  cb();
};

module.exports = canvas;
