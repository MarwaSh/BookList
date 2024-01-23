app.service('BooksService', function ($http) {
    // Google Books API base URL
    var apiUrl = 'https://www.googleapis.com/books/v1/volumes';

    this.searchBooks = function (query, page) {
        // Perform a search query to the Google Books API
        var params = {
            q: query,
            startIndex: (page - 1) * 10,  // Assuming 5 results per page
            maxResults: 10  // Adjust as needed
        };

        return $http.get(apiUrl, { params: params });
    };

    this.getBookDetails = function (bookId) {
        // Get detailed information for a specific book
        return $http.get(`${apiUrl}/${bookId}`);
    };
});
