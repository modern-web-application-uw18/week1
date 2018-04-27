'use strict';

var DivElement = require('../src/components/DivElement');

describe('DivElement class', function () {
  var classDefintion = void 0;

  beforeEach(function () {
    classDefintion = DivElement.toString();
  });

  it('should be defined with the keyword "class"', function () {
    expect(classDefintion).toContain('class DivElement');
  });

  it('should inherit properties from the HTMLElement class', function () {
    expect(classDefintion).toContain('extends HTMLElement');
  });

  it('should use the "super" keyword to call the parent class constructor', function () {
    expect(classDefintion).toContain('super(');
  });

  it('should render valid div elements', function () {
    var div = new DivElement('University of Washington');
    expect(div.render()).toBe('<div>University of Washington</div>');
  });
});