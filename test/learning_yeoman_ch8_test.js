/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/
'use strict';
var grunt = require('grunt');
exports.learning_yeoman_ch8 = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  
  //This is the default options test - It should write 'Hello Learning Yeoman' by default.
  default_options: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should perform task with default options.');
    test.done();
  },
  
  //This is the custom options test - It should write 'Hello [name]' where [name] is the value in the task options.
  custom_options: function(test) {
    test.expect(1);
    var actual = grunt.file.read('tmp/custom_options');
    var expected = grunt.file.read('test/expected/custom_options');
    test.equal(actual, expected, 'should perform task with custom options.');
    test.done();
  }
};