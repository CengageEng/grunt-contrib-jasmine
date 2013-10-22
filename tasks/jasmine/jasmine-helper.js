/*global jasmine:false, window:false, document:false*/

(function(){
  'use strict';

  var jasmineEnv = jasmine.getEnv();

  jasmineEnv.updateInterval = 500;
  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $(document).ready(function() {
      jasmineEnv.execute();
  });
}());

