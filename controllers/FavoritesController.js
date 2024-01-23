app.controller('FavoritesController', ['$scope', '$mdDialog', 'FavoritesService', function ($scope, $mdDialog, FavoritesService) {

    $scope.favoriteBooks = FavoritesService.getFavorites();

    // Assign unique IDs to books based on id or other properties
    $scope.favoriteBooks.forEach(function (book) {
        book.uniqueId = book.id || (book.volumeInfo.title + '_' + book.volumeInfo.authors.join('_'));
    });

    // Function to remove a book from favorites
    $scope.removeFromFavorites = function (book) {
        var updatedFavorites = FavoritesService.removeFromFavorites(book);
        console.log('Updated favorites:', updatedFavorites);
        $scope.favoriteBooks = updatedFavorites;
    };

$scope.openBookDetailsModal = function (book) {
    $mdDialog.show({
      controller: 'BookDetailsModalController',
      templateUrl: './views/book-details-modal.html',
      locals: {
        bookDetails: book
      },
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: true
    });
  };

}]);
