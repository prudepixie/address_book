var app = angular.module('heroesAddressBook', ['ngRoute', 'templates', 'angular-advanced-searchbox'])

app.config(function ($routeProvider) {
    $routeProvider
      // .when('/contacts', {
      //   controller: 'ContactsCtrl',
      //   templateUrl: 'contacts.html'
      // })
      .otherwise({
        controller: 'ContactsCtrl',
        templateUrl: 'contacts.html'
      })
});
