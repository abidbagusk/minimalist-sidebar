$(document).ready(function () {
    $('.wrapper-submenu-two').click(function (e) {
        $('.sub-menu-one').slideToggle(200, function () {
            $('.sub-menu-two').slideToggle(500);
        });
        e.preventDefault();
    });
});