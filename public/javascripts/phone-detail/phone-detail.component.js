angular
.module('phonecatApp')
.component('phoneDetail', {
  templateUrl: '/javascripts/phone-detail/phone-detail.template.html',
  controller: ['$http', '$routeParams',
    function PhoneDetailController($http, $routeParams) {
      var self = this;

      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };

      self.onDblclick = function onDblclick(imageUrl) {
        alert('You double clicked image: ' + imageUrl);
      };

      $http.get('javascripts/phones/' + $routeParams.phoneId + '.json')
      .then(function(response){
        self.phone = response.data;
        self.setImage(self.phone.images[0]);
      });
    }
  ]
});