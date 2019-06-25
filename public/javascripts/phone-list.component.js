angular
.module('phonecatApp')
.component('phoneList', {
  template:
    '<p>hello {{ $ctrl.user }}</p>' +
    '<ul>' +
      '<li ng-repeat="phone in $ctrl.phones">' +
        '<span>{{ phone.name }}</span>' +
        '<p>{{ phone.snippet }}</p>' +
      '</li>' +
    '</ul>' +
    '<p>Total number of phones: {{ $ctrl.phones.length }}</p>',
  controller: function PhoneListController() {
    this.user = 'World';
    this.phones = [
      {
        name: 'Nexus S.',
        snippet: 'Fast just got faster with Nexus S.'
      },
      {
        name: 'Motorola XOOM with Wi-Fi',
        snippet: 'The Next, Next generation tablet.'
      },
      {
        name: 'Motorola XOOM',
        snippet: 'The Next, Next generation tablet.'
      }
    ];
  }
});
