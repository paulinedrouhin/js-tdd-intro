const Rectangle = require('../Rectangle')
const assert = require('assert');


// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using it
  it('is a square', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
    const rectangle2 = new Rectangle(5, 5);
    assert.strictEqual(rectangle2.isSquare(), true);
  });

  it('returns rectangles area', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it('returns rectangles perimeter', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
