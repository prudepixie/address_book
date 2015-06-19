var app = angular.module('heroesAddressBook', ['ngRoute', 'templates'])

app.config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        controller: 'ContactsCtrl',
        templateUrl: 'contacts.html'
      })
});
