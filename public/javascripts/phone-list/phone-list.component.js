angular
.module('phoneList')
.component('phoneList', {
  templateUrl: '/javascripts/phone-list/phone-list.template.html',
  controller: ['Phone', function PhoneListController(Phone) {
    this.user = 'World'
    this.phones = Phone.query();
    this.orderProp = 'age';
  }]
});
