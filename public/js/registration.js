(function ($) {
    // USE STRICT
    "use strict";

    $(".form-radio .radio-item").click(function(){
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });
  
    // $('#course_type').parent().append('<ul class="list-item" id="newcourse_type" name="course_type"></ul>');
    // $('#course_type option').each(function(){
    //     $('#newcourse_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    // });
    // $('#course_type').remove();
    // $('#newcourse_type').attr('id', 'course_type');
    // $('#course_type li').first().addClass('init');
    // $("#course_type").on("click", ".init", function() {
    //     $(this).closest("#course_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#fac_type').parent().append('<ul class="list-item" id="newfac_type" name="fac_type"></ul>');
    // $('#fac_type option').each(function(){
    //     $('#newfac_type').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    // });
    // $('#fac_type').remove();
    // $('#newfac_type').attr('id', 'fac_type');
    // $('#newfac_type').css('z-index',999);
    // $('#newfac_type').css('display',block;
    // $('#fac_type li').first().addClass('init');
    // $("#fac_type").on("click", ".init", function() {
    //     $(this).closest("#fac_type").children('li:not(.init)').toggle('slow');
    // });


    // var allOptions = $("#course_type").children('li:not(.init)');
    // $("#course_type").on("click", "li:not(.init)", function() {
    //     allOptions.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#course_type").children('.init').html($(this).html());
    //     allOptions.toggle('slow');
    // });

    // var facOptions = $("#fac_type").children('li:not(.init)');
    // $("#fac_type").on("click", "li:not(.init)", function() {
    //     facOptions.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#fac_type").children('.init').html($(this).html());
    //     facOptions.toggle('slow');
    // });

    
})(jQuery);