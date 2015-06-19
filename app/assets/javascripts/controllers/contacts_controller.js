app.controller('ContactsCtrl', ['$scope', 'contactsService', function($scope, contactsService){
     $scope.contacts = contactsService.getContacts();
     $scope.contactDetails = $scope.contacts[0];
     $scope.toggleEditModal = false;

     $scope.showContactDetails = function(contact) {
        $scope.contactDetails['firstname'] = contact.firstname;
        $scope.contactDetails['lastname'] = contact.lastname;
        $scope.contactDetails['phone'] = contact.phone;
        $scope.contactDetails['email'] = contact.email;
        $scope.contactDetails['address'] = contact.address;
     };

     $scope.editContact = function (name) {
        $scope.toggleEditModal = true;
     };

  }
]);
