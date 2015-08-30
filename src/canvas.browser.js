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

module.exports = canvas;
