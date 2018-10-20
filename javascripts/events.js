const locationSearch = () => {
    $("#searchBar").keypress(function() {
        let searchTerm = $("#searchBar").val().toLowerCase;
        $('.locations').not(':contains(searchTerm).toggle()')
    });
};

export { locationSearch }