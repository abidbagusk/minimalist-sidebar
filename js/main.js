$(document).ready(function () {
    $('.wrapper-submenu-one').click(function (e) {
        $('.sub-menu-one').slideToggle(500, function () {
            $('.sub-menu-two').slideUp(400, function () {
                $('.sub-menu-three').slideUp(400);
            });
        });
        e.preventDefault();
        e.stopPropagation();
    });
    $('.wrapper-submenu-two').click(function (e) {
        $('.sub-menu-one').slideUp(400, function () {
            $('.sub-menu-two').slideDown(500, function () {
                $('.sub-menu-three').slideUp(400);
            });
        });
        e.preventDefault();
        e.stopPropagation();
    });

    $('.wrapper-submenu-three').click(function (e) {
        $('.sub-menu-one').slideUp(400, function () {
            $('.sub-menu-three').slideDown(500, function () {
                $('.sub-menu-two').slideUp(400);
            });
        });
        e.preventDefault();
        e.stopPropagation();
    });

});

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
}