// Search Bar event
const locationSearch = () => {
    $("#searchBar").keypress(function() {
        let searchTerm = $("#searchBar").val();
        $('.locations').not(`:contains(${searchTerm})`).hide();
    });
};

// Button Events
const buttonEvents = () => {
    $('body').on('click', '#morningButton', (e) => {
        console.log('buenos dias!');
    //   $('.locations').not(:contains("Morning").hide();
    });
    $('body').on('click', '#afternoonButton', (e) => {
        console.log('buenas tardes!');
    });
    $('body').on('click', '#eveningButton', (e) => {
        console.log('buenas.... tardes?');
    });
    $('body').on('click', '#afterDarkButton', (e) => {
        console.log('buenas noches!');
    });
};




export { locationSearch, buttonEvents }