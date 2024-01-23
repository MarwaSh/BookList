app.service('FavoritesService', function () {
    // Assume using localStorage for simplicity
    var favoritesKey = 'userFavorites';

    this.getFavorites = function () {
        // Get user's favorite books from localStorage
        var favorites = localStorage.getItem(favoritesKey);
        return favorites ? JSON.parse(favorites) : [];
    };

    this.toggleFavorite = function (book) {
        // Toggle a book as a favorite
        var favorites = this.getFavorites();
        var index = favorites.findIndex(fav => fav.id === book.id);

        if (index === -1) {
            // Book not in favorites, add it
            favorites.push(book);
        } else {
            // Book is in favorites, remove it
            favorites.splice(index, 1);
        }

        // Save updated favorites to localStorage
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));

        return favorites;
    };

    this.removeFromFavorites = function (book) {
        // Remove a book from favorites
        var favorites = this.getFavorites();
        var index = favorites.findIndex(fav => fav.id === book.id);

        if (index !== -1) {
            // Book is in favorites, remove it
            favorites.splice(index, 1);
        }

        // Save updated favorites to localStorage
        localStorage.setItem(favoritesKey, JSON.stringify(favorites));

        return favorites;
    };
});
