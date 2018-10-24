// Search Bar event
const locationSearch = () => {
    $("#searchBar").keyup(function() {
        let searchTerm = $("#searchBar").val();
        $(".locations").show();
        $('.locations').not(`:contains(${searchTerm})`).hide();
    })
};

// Button Events
const buttonEvents = () => {
    $('body').on('click', '#morningButton', (e) => {
        $(".locations").show();
        $(".locations").not(".Morning").hide();
    });
    $('body').on('click', '#afternoonButton', (e) => {
        $(".locations").show();
        $(".locations").not(".Afternoon").hide();
    });
    $('body').on('click', '#eveningButton', (e) => {
        $(".locations").show();
        $(".locations").not(".Evening").hide();
    });
    $('body').on('click', '#afterDarkButton', (e) => {
        $(".locations").show();
        $(".locations").not(".After").hide();
    });
    $('body').on('click', '#showAll', (e) => {
        $(".locations").show();
    })
};




export { locationSearch, buttonEvents }