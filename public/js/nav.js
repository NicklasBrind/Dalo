$(document).ready(function () {
    // Get the current URL
    var currentUrl = window.location.pathname;
    console.log(currentUrl);

    // Get the span you want with a combination class and attribute and child jQuery selector
    var currentMenuItem = $(".nav_link[href='" + currentUrl + "']"); //> .main-nav-item
    console.log(currentMenuItem);

    // Then add your class
    currentMenuItem.addClass("nav_link_selected");
});