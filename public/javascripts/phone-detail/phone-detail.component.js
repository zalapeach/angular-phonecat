angular
.module('phoneDetail')
.component('phoneDetail', {
  templateUrl: '/javascripts/phone-detail/phone-detail.template.html',
  controller: ['$routeParams', 'Phone',
    function PhoneDetailController($routeParams, Phone) {
      var self = this;

      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };

      self.onDblclick = function onDblclick(imageUrl) {
        alert('You double clicked image: ' + imageUrl);
      };

      self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
        self.setImage(phone.images[0]);
      });
    }
  ]
});
