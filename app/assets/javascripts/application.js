// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
$(document).ready(function(){
   $('.scroll_sub_nav').click(function(evt) {
      evt.preventDefault();
      $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
      }, 1000);
});
    });


//menu-bar

// $(document).ready(function(){

//     $('.scroll_sub_nav').click(function(evt) {
//       evt.preventDefault();
//       var b = $('#change_content').children().first()
//        $(b).html(($( $(this).attr('href')).html()))
//       $('html, body').animate({
//         scrollTop: $( "#change_content" ).offset().top
//       }, 1000);


//     });


// });

$(document).ready(function(){

 $(".scroll_nav").click(function(evt){

   var b=$(this).closest('.dropdown').find('.hide_divs_class').attr('id')
   
  $(".side-nav").css("margin-top", "0px");
  $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);
        evt.preventDefault();
 $(".hide_divs_class").slideUp('slow')
 var c=$("#lamer_id").text();
 if(b!==c) {
 $(this).closest('.dropdown').find('.hide_divs_class').slideDown('slow');
 
}

 $("#lamer_id").text(b);
 if(b==c){
   $("#lamer_id").text("default");
   $(".side-nav").css("margin-top", "220px");
 }

 });

});



    // $('.scroll_sub_nav').click(function(evt) {
    //   evt.preventDefault();
    //   $('html, body').animate({
    //     scrollTop: $( $(this).attr('href')).offset().top
    //   }, 1000);

    // });

    // $('.scroll_sub_nav').click(function(evt) {
    //   evt.preventDefault();
    //   $('html, body').animate({
    //     scrollTop: $( "#" + $(this).text() ).offset().top
    //   }, 1000);

    // });


    $(document).ready(function() {
  $('.nav-trigger').click(function() {
    $('.side-nav').toggleClass('visible');
  });
});


$(window).on('scroll', function(evt) {
    var y_scroll_pos = window.pageYOffset;
            // set to whatever you want it to be
              evt.preventDefault();
      //VENUE 
      //
      //
      //
   if(y_scroll_pos < 150 || y_scroll_pos >6000 ){
           $("#main_div_venue").css("display", "none");
       $(".side-nav").css("margin-top", "210px");
        $("#hide_divs_id_one").slideUp('slow');
         $("#c_vanue").css("font-size","28px");
    }
          evt.preventDefault();
    if(y_scroll_pos > 150 && y_scroll_pos < 6000) {
       $("#main_div_venue").css("display", "block");
       $(".side-nav").css("margin-top", "0px");
       $("#hide_divs_id_one").slideDown('slow');
       $("#c_vanue").css("font-size","35px");

    }
          evt.preventDefault();
    if(y_scroll_pos > 1300 && y_scroll_pos <2100){
         $("#building_div").css("display", "block");
         $("#c_building").css("font-size","35px");
    
    }
          evt.preventDefault();
     if(y_scroll_pos < 1300 || y_scroll_pos > 2100){
         $("#building_div").css("display", "none");
           $("#c_building").css("font-size","25px");
      }
            evt.preventDefault();
   if(y_scroll_pos > 2600 && y_scroll_pos < 3400){
         $("#terrace_div").css("display", "block");
           $("#c_terrace").css("font-size","35px");
      
    }
    if(y_scroll_pos < 2600 || y_scroll_pos > 3400){
         $("#terrace_div").css("display", "none");
          $("#c_terrace").css("font-size","25px");
      }
    
      if(y_scroll_pos > 3900 && y_scroll_pos < 4700){
         $("#bar_div").css("display", "block");
          $("#c_bar").css("font-size","35px");
      
    }
    if(y_scroll_pos < 3900 || y_scroll_pos > 4700){
         $("#bar_div").css("display", "none");
           $("#c_bar").css("font-size","25px");
      }

if(y_scroll_pos > 5200 && y_scroll_pos < 6000){
         $("#main_area_div").css("display", "block");
         $("#c_main_area").css("font-size","35px");
      
    }
    if(y_scroll_pos < 5200 || y_scroll_pos > 6000){
         $("#main_area_div").css("display", "none");
         $("#c_main_area").css("font-size","25px");
      }

      // FOOD  
      //
      //
      

if(y_scroll_pos > 6000 && y_scroll_pos < 9900) {
       $("#main_div_food").css("display", "block");
       $(".side-nav").css("margin-top", "0px");
       $("#hide_divs_id_two").slideDown('slow');
       $("#c_food").css("font-size","35px");
    }
     if(y_scroll_pos < 6000 ||y_scroll_pos >9900 ){
           $("#main_div_food").css("display", "none");
        $("#hide_divs_id_two").slideUp('slow');
         $("#c_food").css("font-size","28px");
    }
    if(y_scroll_pos > 7800 && y_scroll_pos < 8600){
         $("#regular_div").css("display", "block");
         $("#c_regular").css("font-size","35px");
      
    }
    if(y_scroll_pos < 7800 || y_scroll_pos > 8600){
         $("#regular_div").css("display", "none");
         $("#c_regular").css("font-size","25px");
      }
      if(y_scroll_pos > 9100 && y_scroll_pos < 9900){
         $("#wedding_menu_div").css("display", "block");
         $("#c_wedding_menu").css("font-size","35px");
      
    }
    if(y_scroll_pos < 9100 || y_scroll_pos > 9900){
         $("#wedding_menu_div").css("display", "none");
         $("#c_wedding_menu").css("font-size","25px");
      }
    });