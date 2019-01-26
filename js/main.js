$(document).ready(function () {
    $('.wrapper-submenu-two').click(function (e) {
        $('.sub-menu-one').slideUp(400, function () {
            $('.sub-menu-two').slideToggle(500, function () {
                $('.sub-menu-three').slideUp(400);
            });
        });
        e.preventDefault();
    });

    $('.wrapper-submenu-three').click(function (e) {
        $('.sub-menu-one').slideUp(400, function () {
            $('.sub-menu-three').slideToggle(500, function () {
                $('.sub-menu-two').slideUp(400);
            });
        });
        e.preventDefault();
    });

});