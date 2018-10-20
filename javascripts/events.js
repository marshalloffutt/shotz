const locationSearch = () => {
    $("#searchBar").keypress(function() {
        let searchTerm = $("#searchBar").val();
        $('.locations').not(`:contains(${searchTerm})`).hide();
    });
};

export { locationSearch }