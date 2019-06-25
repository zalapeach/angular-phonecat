angular
.module('phonecatApp')
.component('phoneDetail', {
  templateUrl: '/javascripts/phone-detail/phone-detail.template.html',
  controller: ['$http', '$routeParams',
    function PhoneDetailController($http, $routeParams) {
      var self = this;
      $http.get('javascripts/phones/' + $routeParams.phoneId + '.json')
      .then(function(response){
        self.phone = response.data;
      });
    }
  ]
});
