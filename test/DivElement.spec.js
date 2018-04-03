const DivElement = require('../src/components/DivElement');

describe('DivElement class', () => {
  let classDefintion;

  beforeEach(() => {
    classDefintion = DivElement.toString();
  });

  it('should be defined with the keyword "class"', () => {
    expect(classDefintion).toContain('class DivElement');
  });

  it('should inherit properties from the HTMLElement class', () => {
    expect(classDefintion).toContain('extends HTMLElement');
  });

  it('should use the "super" keyword to call the parent class constructor', () => {
    expect(classDefintion).toContain('super(');
  });

  it('should render valid div elements', () => {
    const div = new DivElement('University of Washington');
    expect(div.render()).toBe('<div>University of Washington</div>');
  });
});
