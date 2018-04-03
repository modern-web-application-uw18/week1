const HTMLElement = require('../src/components/HTMLElement');

describe('HTMLElement class', () => {
  let classDefintion;

  beforeEach(() => {
    classDefintion = HTMLElement.toString();
  });

  it('should be defined with the keyword "class"', () => {
    expect(classDefintion).toContain('class HTMLElement');
  });

  it('should have a function called "render()"', () => {
    expect(classDefintion).toContain('render()');
  });

  it('should render valid HTML elements', () => {
    const div = new HTMLElement('div', 'University of Washington');
    expect(div.render()).toBe('<div>University of Washington</div>');

    const paragraph = new HTMLElement('p', 'Hello');
    expect(paragraph.render()).toBe('<p>Hello</p>');
  });
});
