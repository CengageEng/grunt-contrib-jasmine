/*global jasmine:false, window:false, document:false*/

(function(){
  'use strict';

  var jasmineEnv = jasmine.getEnv();

  jasmineEnv.updateInterval = 1000;
  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $(document).ready(function() {
      setTimeout(function() {
        jasmineEnv.execute();
      }, 1 * 1000);
  });
}());

