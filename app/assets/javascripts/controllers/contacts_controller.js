app.controller('ContactsCtrl', ['$scope', 'contactsService', function($scope, contactsService){
     $scope.contacts = contactsService.getContacts();
  }
]);
