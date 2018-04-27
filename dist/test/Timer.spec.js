'use strict';

var Timer = require('../src/timer/Timer');

describe('Timer class', function () {
  var classDefintion = void 0;

  beforeEach(function () {
    classDefintion = Timer.toString();
  });

  it('should be defined with the keyword "class"', function () {
    expect(classDefintion).toContain('class Timer');
  });

  it('should have a function called "start()"', function () {
    expect(classDefintion).toContain('start()');
  });

  it('should use an arrow function instead of assigning this to a variable', function () {
    var startFunction = Timer.prototype.start.toString();
    expect(startFunction).not.toContain('= this;');
  });
});