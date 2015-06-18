app.controller('ContactsCtrl', ['$scope', 'contactsService', function($scope, contactsService){
     $scope.contacts = contactsService.getContacts();
     console.log($scope.contacts);
  }
]);
