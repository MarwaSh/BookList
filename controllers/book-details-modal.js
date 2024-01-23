angular.module('BooksApp')
  .controller('BookDetailsModalController', ['$scope', '$mdDialog', 'bookDetails', function ($scope, $mdDialog, bookDetails) {

    $scope.bookDetails = bookDetails;

    // Close the modal
    $scope.closeModal = function () {
      $mdDialog.hide();
    };
  }]);
