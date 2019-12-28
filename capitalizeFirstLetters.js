const assert = require('assert')

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript is gold correctly
assert.strictEqual(capitalizeFirst('javaScript is gold'), 'JavaScript Is Gold');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');

function capitalizeFirst(input) {
    let output = '';
    for (let i = 0 ; i < input.length ; i++) {
      if (i === 0) {
        output += input[0].toUpperCase();
      } 
      else if ( input[i-1] === ' ') {
          output += input[i].toUpperCase()
      }
      else {
        output += input[i];
      }
    }
    return output;
  }