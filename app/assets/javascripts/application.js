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




//menu-bar

$(document).ready(function(){

    $('.scroll_sub_nav').click(function(evt) {
      evt.preventDefault();
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);


    });


});

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


    $('.scroll_sub_nav').click(function(evt) {
      evt.preventDefault();
      $('html, body').animate({
        scrollTop: $( "#" + $(this).text() ).offset().top
      }, 1000);

    });


