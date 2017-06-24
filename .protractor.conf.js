var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var screenshotReporter = new HtmlScreenshotReporter({
  dest: 'tests/out/e2e/screenshots',
  filename: 'my-screenshot-report.html'
});

exports.config = {
  capabilities : {
    'browserName' : 'chrome',
    'chromeOptions' : {
      'args': ['--headless', '--disab;e-gpu']
    }
  },

  framework: 'jasmine',
  specs: ['./tests/e2e/index.js'],

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      screenshotReporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(screenshotReporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
}
