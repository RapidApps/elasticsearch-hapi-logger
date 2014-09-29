# elasticsearch-hapi-logger

> Elastic Search Client Logger for Hapi

## Installation

This module is installed using npm:
```sh
npm install --save elasticsearch-hapi-logger
```

## Usage example

```js
var Hapi = require('hapi');
var ElasticSearch = require('elasticsearch');

var server = new Hapi.Server();
var es = new ElasticSearch.Client({
  log: require('elasticsearch-hapi-logger')(server)
});
```
