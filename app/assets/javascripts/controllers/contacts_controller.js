app.controller('ContactsCtrl', ['$scope', 'contactsService', function($scope, contactsService){
     $scope.contacts = contactsService.getContacts();
     $scope.contactDetails = {}

     $scope.showContactDetails = function(contact) {
        $scope.contactDetails['name'] = contact.firstname + contact.lastname;
        $scope.contactDetails['phone'] = contact.phone;
        $scope.contactDetails['email'] = contact.email;
        $scope.contactDetails['address'] = contact.address;
     }
  }
]);
