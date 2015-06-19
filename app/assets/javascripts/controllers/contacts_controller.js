app.controller('ContactsCtrl', ['$scope', 'contactsService', function($scope, contactsService){
     $scope.contacts = contactsService.getContacts();
     $scope.contactDetails = {
      'firstname' : 'Cameron',
      'lastname'  : 'Dubas',
      'phone'     : '6047280012',
      'address'   : '289 Abbott St., Vancouver, BC, V3M 2L7',
      'email'     : 'cameron@changeheroes.com'
    };

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

     $scope.closeEditModal = function () {
      $scope.toggleEditModal = false;
     }
  }
]);
