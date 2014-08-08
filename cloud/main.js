
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var crawl = function (url, success, error) {
  Parse.Cloud.httpRequest({
    url: url,
    success: function (httpResponse) {
      success();
    },
    error: function (httpResponse) {
      error();
    }
  });
};

Parse.Cloud.define('crawl', function(request, response) {
  crawl(request.params.url,
        function () {
          response.success('success');
        },
        function () {
          console.err('Request failed with response code ' + httpRequest.status);
        });
});
