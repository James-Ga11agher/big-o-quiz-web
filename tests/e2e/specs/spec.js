describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

describe('Landing Page', () => {
  it('renders a h1 - Big O Quiz', () => {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080/');
    expect(element(by.css('h1')).getText()).toBe('Big O Quiz');
  });
});
