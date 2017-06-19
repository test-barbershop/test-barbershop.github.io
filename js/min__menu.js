 $(function() {
        var minmenu = $('.minmenu');
        menu = $('.menu');

        $(minmenu).on('click', function(e) {
            $('.top').css("height", "145px");
            $('.log-in_view').css("top", "96px");
            $('.minmenu').css("top", "26px");
            $('.header__logo').css("padding-top", "155px");
            $('.header__news_view').css("height", "320px");

            e.preventDefault();

            menu.slideToggle();

            menu.css("display", "flex");
            menu.css("justify-content", "space-around");
            menu.css("width", "70%");
        });
    });