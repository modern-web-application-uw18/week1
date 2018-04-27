'use strict';

var HTMLElement = require('../src/components/HTMLElement');

describe('HTMLElement class', function () {
  var classDefintion = void 0;

  beforeEach(function () {
    classDefintion = HTMLElement.toString();
  });

  it('should be defined with the keyword "class"', function () {
    expect(classDefintion).toContain('class HTMLElement');
  });

  it('should have a function called "render()"', function () {
    expect(classDefintion).toContain('render()');
  });

  it('should render valid HTML elements', function () {
    var div = new HTMLElement('div', 'University of Washington');
    expect(div.render()).toBe('<div>University of Washington</div>');

    var paragraph = new HTMLElement('p', 'Hello');
    expect(paragraph.render()).toBe('<p>Hello</p>');
  });
});