$(document).ready(function () {
    $('.wrapper-submenu-one').click(function (e) {
        $('.sub-menu-one').slideToggle(500, function () {
            $('.sub-menu-two').slideUp(400, function () {
                $('.sub-menu-three').slideUp(400);
            });
        });
        e.preventDefault();
    });
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

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}