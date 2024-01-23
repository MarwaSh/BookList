app.controller('BooksController', ['$scope', '$mdDialog', '$location', 'BooksService', 'FavoritesService', function ($scope, $mdDialog, $location, BooksService, FavoritesService) {
    $scope.searchQuery = '';
    $scope.books = [];
    $scope.currentPage = 1;

    // Search books based on the current query and page
    $scope.searchBooks = function () {
        BooksService.searchBooks($scope.searchQuery, $scope.currentPage)
            .then(function (response) {
                $scope.books = response.data.items || [];
            })
            .catch(function (error) {
                console.error('Error fetching books:', error);
                // Log the full error object for more details
                console.error('Full error object:', error);
            });
    };
    

    // Fetch the next page of books
    $scope.fetchNextPage = function () {
        $scope.currentPage++;
        $scope.searchBooks();
    };

    // Fetch the previous page of books
    $scope.fetchPreviousPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            $scope.searchBooks();
        }
    };

    // Toggle a book as a favorite
    $scope.toggleFavorite = function (book) {
        var updatedFavorites = FavoritesService.toggleFavorite(book);
        console.log('Updated favorites:', updatedFavorites);
    };

    // Check if a book is in the user's favorites
    $scope.isFavorite = function (book) {
        var favorites = FavoritesService.getFavorites();
        return favorites.some(fav => fav.id === book.id);
    };

    
    // Open the book details modal
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

    // Initial search when the controller loads
    $scope.searchBooks();
}]);
