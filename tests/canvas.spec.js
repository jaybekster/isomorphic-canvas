describe('isomorphic canvas browser', function () {
  var isoCanvas = window['isomorphic-canvas'];
  var gifUrl = '/base/tests/1px.gif';
  var png3x2 = 'data:image/png;base64,' +
    'iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAADklEQVQIW2NkQAKMyBwAAEEAAzqc1JUAAAAASUVORK5CYII=';

  it('exports', function () {
    expect(isoCanvas).toEqual(jasmine.any(Function));
    expect(isoCanvas.getImage).toEqual(jasmine.any(Function));
    expect(isoCanvas.getImageSync).toEqual(jasmine.any(Function));
  });

  it('canvas', function () {
    var canvas = isoCanvas(7, 8);
    expect(canvas.nodeName.toUpperCase()).toBe('CANVAS');
    expect(canvas.getContext('2d') instanceof CanvasRenderingContext2D).toBeTruthy();
    expect(canvas.width).toBe(7);
    expect(canvas.height).toBe(8);
  });

  it('image onload', function (done) {
    isoCanvas.getImage(gifUrl, function (err, img) {
      expect(img).toEqual(jasmine.any(Image));
      expect(img.width).toBe(1);
      expect(img.height).toBe(1);
      done();
    })
  });

  it('image onerror', function (done) {
    isoCanvas.getImage('error.png', function (err) {
      expect(err).toEqual(jasmine.any(Error));
      expect(err.message).toBe('Cannot load img error.png');
      done();
    })
  });

  it('image sync base64', function (done) {
    var imgSync = isoCanvas.getImageSync(png3x2, function (err, img) {
      expect(img).toBe(imgSync);
      expect(img.width).toBe(3);
      expect(img.height).toBe(2);
      done();
    });
    expect(imgSync).toEqual(jasmine.any(Image));
  });

});