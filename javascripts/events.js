// Search Bar event
const locationSearch = () => {
    $("#searchBar").keyup(function() {
        let searchTerm = $("#searchBar").val();
        $(".locations").show();
        $('.criteria').not(`:contains(${searchTerm})`).closest('.locations').hide();
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
    $('body').on('click', '#toMainView', (e) => {
        $("#main-view").show();
        $("#secondary-view").hide();
    })
};

export { locationSearch, buttonEvents }