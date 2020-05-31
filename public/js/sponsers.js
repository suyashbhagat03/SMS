$(function() {
            $(".hamburger").click(function(e) {
                $(".hamburger").toggleClass("is-active");
                $(".nav-menu").slideToggle()
            });
        });
new WOW().init();

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }



//Preloader

$(window).on('load', function() { // makes sure the whole site is loaded
    setTimeout(function(){ 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
     }, 3000);

})

//