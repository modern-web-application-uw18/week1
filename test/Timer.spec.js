const Timer = require('../src/timer/Timer');

describe('Timer class', () => {
  let classDefintion;

  beforeEach(() => {
    classDefintion = Timer.toString();
  });

  it('should be defined with the keyword "class"', () => {
    expect(classDefintion).toContain('class Timer');
  });

  it('should have a function called "start()"', () => {
    expect(classDefintion).toContain('start()');
  });

  it('should use an arrow function instead of assigning this to a variable', () => {
    const startFunction = Timer.prototype.start.toString();
    expect(startFunction).not.toContain('= this;');
  });
});
