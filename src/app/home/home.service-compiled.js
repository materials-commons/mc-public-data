angular.module.factory('recipeService', ['$q', 'esFactory', '$location', function ($q, elasticsearch, $location) {
  var client = elasticsearch({
    host: $location.host() + ':9200'
  });

  /**
   * Given a term and an offset, load another round of 10 recipes.
   *
   * Returns a promise.
   */
  var search = function (term, offset) {
    var deferred = $q.defer();
    var query = {
      match: {
        _all: term
      }
    };

    client.search({
      index: 'recipes',
      type: 'recipe',
      body: {
        size: 10,
        from: (offset || 0) * 10,
        query: query
      }
    }).then(function (result) {
      var ii = 0,
          hits_in,
          hits_out = [];

      hits_in = (result.hits || {}).hits || [];

      for (; ii < hits_in.length; ii++) {
        hits_out.push(hits_in[ii]._source);
      }

      deferred.resolve(hits_out);
    }, deferred.reject);

    return deferred.promise;
  };

  // Since this is a factory method, we return an object representing the actual service.
  return {
    search: search
  };
}]);

//# sourceMappingURL=home.service-compiled.js.map