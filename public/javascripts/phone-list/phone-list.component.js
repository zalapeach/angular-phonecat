angular
.module('phonecatApp')
.component('phoneList', {
  templateUrl: '/javascripts/phone-list/phone-list.template.html',
  controller: ['$http', function PhoneListController($http) {
    var self = this;
    self.orderProp = 'age';
    self.user = 'World'
    $http.get('javascripts/phones.json').then(function(response) {
      self.phones = response.data;
    });
  }]
});
