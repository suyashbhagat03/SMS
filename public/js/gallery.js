




function openNav() {
   
    let x=  screen.width;
 
    if(x < 700)
    {
         document.getElementById("myNav").style.width = "60%";
    }
    else{
       
        document.getElementById("myNav").style.width = "20%";
    }
    
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
     }, 0);

})

//
