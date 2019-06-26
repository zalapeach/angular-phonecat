angular
.module('core.phone')
.factory('Phone', ['$resource',
  function($resource) {
    return $resource('/javascripts/phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: { phoneId: 'phones' },
        isArray: true
      }
    });
  }
]);
