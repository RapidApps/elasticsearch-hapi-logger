'use strict';

module.exports = function (server, tags) {
  if (!tags) {
    tags = ['es'];
  }

  var errorTags = ['error'].concat(tags);
  var warningTags = ['warning'].concat(tags);
  var infoTags = ['info'].concat(tags);
  var debugTags = ['debug'].concat(tags);
  var traceTags = ['trace'].concat(tags);

  function HapiLogger(config) {
  }

  HapiLogger.prototype.error = function (err) {
    server.log(errorTags, err);
  };

  HapiLogger.prototype.warning = function (message) {
    server.log(warningTags, {message: message});
  };

  HapiLogger.prototype.info = function (message) {
    server.log(infoTags, {message: message});
  };

  HapiLogger.prototype.debug = function (message) {
    server.log(debugTags, {message: message});
  };

  HapiLogger.prototype.trace = function (method, requestUrl, requestBody, responseBody, responseStatus) {
    server.log(traceTags, {
      method: method,
      url: requestUrl,
      request: requestBody,
      response: responseBody,
      status: responseStatus
    });
  };

  HapiLogger.prototype.close = function () {
    // No need to do anything
  };

  return HapiLogger;
};
