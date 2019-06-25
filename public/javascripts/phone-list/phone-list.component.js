angular
.module('phonecatApp')
.component('phoneList', {
  templateUrl: '/javascripts/phone-list/phone-list.template.html',
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
