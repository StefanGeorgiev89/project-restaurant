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
// $(document).ready(function(){
//   $( "#IMGMAPS" ).mouseover(function(evt) {
//             evt.preventDefault();
//     $("#IMGMAPS").setAttribute('src', "/assets/showall.jpg");
//          })

 
// });
// $(document).ready(function(){
        
//       $("#building").mouseenter(function (evt) {
//          evt.preventDefault();
//               $("#IMGMAPS").attr('src', '/assets/plan10.png');
//         }).mouseleave(function (evt)
//         {
//          evt.preventDefault();
//              $("#IMGMAPS").attr('src', '/assets/plan.png');

//         });
// });
$(document).ready(function(){

   

     $("#building").mouseenter(function (evt) {
     
        var currentElement =  $("#hidden_p").text() 
         evt.preventDefault();
         if(currentElement.length==0){
           // alert("A")
              $("#IMGMAPS").attr('src', '/assets/qlan.png');
}else{
  // alert("B")
   $("#IMGMAPS").attr('src',currentElement );
}
     $('area').click(function(evt){
        evt.preventDefault();
          var currentId =  $(this).data('imageurl');

$("#IMGMAPS").attr('src', currentId);
        $("#hidden_p").text(currentId)
     })
        }).mouseleave(function (evt)
        {
          var mouseLeave = $("#hidden_p").text() 
          mouseLeave = setCharAt(mouseLeave,8,'q');
          // alert(mouseLeave)
         
        
           if(mouseLeave.length == 0){
         // alert("C")
              evt.preventDefault();
             $("#IMGMAPS").attr('src', '/assets/plan.png');
          // alert("D")
           }
           if(mouseLeave.length > 0){
// alert("M")
             $("#IMGMAPS").attr('src', mouseLeave);
           }
          

        });

   });
  
$(document).ready(function(){

    $('.plan_class').click(function(evt) {
      evt.preventDefault();
      var change = $('#change_content').children().first()
      setTimeout($.proxy(function(){
        $(change).html(($( $(this).attr('id')).html()))
      }, this),500);
     
    });
});

$(document).ready(function(){
   $('.scroll_sub_nav').click(function(evt) {
     evt.preventDefault();
      $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
      }, 1000);
     
        $('html, body').clearQueue();
});
    });

  //     var color = $(this).css("background-color");
  //     $(this).css("background","#380606");
  // evt.preventDefault();
  //     $(this).bind("mouseout", function(){
  //       $(this).css("background","#123212");
  //     })
        // $('#modal-content').html('<img src=' + $(this).data('imageurl') +'>');
        // $('#modal-background').fadeIn();

  




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
   
        evt.preventDefault();
   var b=$(this).closest('.dropdown').find('.hide_divs_class').attr('id')
   
 // $(".side-nav").stop().animate({marginTop:'0px',},500);
  $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);
       $('html, body').clearQueue();
        evt.preventDefault();
 // $(".hide_divs_class").slideUp('slow')
//  var c=$("#lamer_id").text();
//  if(b!==c) {
//  $(this).closest('.dropdown').find('.hide_divs_class').slideDown('slow');
 
// }

//  $("#lamer_id").text(b);
//  if(b==c){
//    $("#lamer_id").text("default");
//    $(".side-nav").css("margin-top", "220px");
//  }

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
    if(y_scroll_pos > 150  ){
    $(".side-nav").stop(true, false).animate({marginTop:'0px',},500);
    }
    if(y_scroll_pos < 150 ){
        $(".side-nav").stop(true, false).animate({marginTop:'185px',},1000);
    }
      //VENUE 
      //
      //
      //
//       <script>
// var p = $( "p:last" );
// var offset = p.offset();
// p.html( "left: " + offset.left + ", top: " + offset.top );
// </script>
      var second_img= $("#building")
      var second = second_img.offset().top -60
      var third_img= $("#terrace")
      var third = third_img.offset().top -60
      var fourth_img= $("#bar")
      var fourth = fourth_img.offset().top -60
      var fifth_img= $("#main_area")
      var fifth = fifth_img.offset().top -60
      var sixth_img= $("#super_menu_two")
      var sixth = sixth_img.offset().top -60
      var seventh_img= $("#regular")
      var seventh = seventh_img.offset().top -60
      var eighth_img= $("#wedding_menu")
      var eighth = eighth_img.offset().top -60
      var ninth_img= $("#super_menu_three")
      var ninth = ninth_img.offset().top -60
      var tenth_img= $("#yours")
      var tenth = tenth_img.offset().top -60
      var eleventh_img= $("#mine")
      var eleventh = eleventh_img.offset().top -60
      var twelfth_img= $("#super_menu_four")
      var twelfth = twelfth_img.offset().top -60
      var bot_element=$("#last_element")
      var bottom = bot_element.offset().top
// alert(eleventh)
    if(y_scroll_pos > 150 && y_scroll_pos < sixth ) {
       $("#main_div_venue").css("display", "block");     
       $("#hide_divs_id_one").slideDown('slow');    
    }
   if(y_scroll_pos < 150 || y_scroll_pos >sixth ){
        $("#main_div_venue").css("display", "none");
        $("#hide_divs_id_one").slideUp('slow');
    }

          evt.preventDefault();
    if(y_scroll_pos > second && y_scroll_pos <second+800){
         $("#building_div").css("display", "block");
         // $("#c_building").css("font-size","35px");
    
    }
          evt.preventDefault();
     if(y_scroll_pos < second || y_scroll_pos > second+800){
         $("#building_div").css("display", "none");
           // $("#c_building").css("font-size","25px");
      }
            evt.preventDefault();
   if(y_scroll_pos > third && y_scroll_pos < third+800){
         $("#terrace_div").css("display", "block");
           // $("#c_terrace").css("font-size","35px");
      
    }
    if(y_scroll_pos < third || y_scroll_pos > third+800){
         $("#terrace_div").css("display", "none");
          // $("#c_terrace").css("font-size","25px");
      }
    
      if(y_scroll_pos > fourth && y_scroll_pos < fourth+800){
         $("#bar_div").css("display", "block");
          // $("#c_bar").css("font-size","35px");
      
    }
    if(y_scroll_pos < fourth|| y_scroll_pos > fourth+800){
         $("#bar_div").css("display", "none");
           // $("#c_bar").css("font-size","25px");
      }

if(y_scroll_pos > fifth && y_scroll_pos < fifth+800){
         $("#main_area_div").css("display", "block");
         // $("#c_main_area").css("font-size","35px");
      
    }
    if(y_scroll_pos < fifth || y_scroll_pos > fifth+800){
         $("#main_area_div").css("display", "none");
         // $("#c_main_area").css("font-size","25px");
      }

      // FOOD  
      //
      //
       
  if(y_scroll_pos < sixth|| y_scroll_pos >ninth){
        $("#main_div_food").css("display", "none");
        $("#hide_divs_id_two").slideUp('slow');
      
         // $("#c_food").css("font-size","28px");
    }
     
if(y_scroll_pos > sixth&& y_scroll_pos < ninth) {
       $("#main_div_food").css("display", "block");
       $("#hide_divs_id_two").slideDown('slow');
         
       // $("#c_food").css("font-size","35px");
    }
    

    if(y_scroll_pos > seventh && y_scroll_pos < seventh+800){
         $("#regular_div").css("display", "block");
         // $("#c_regular").css("font-size","35px");
      
    }
    if(y_scroll_pos < seventh || y_scroll_pos > seventh+800){
         $("#regular_div").css("display", "none");
         // $("#c_regular").css("font-size","25px");
      }
      if(y_scroll_pos > eighth && y_scroll_pos < eighth+800){
         $("#wedding_menu_div").css("display", "block");
         // $("#c_wedding_menu").css("font-size","35px");
      
    }
    if(y_scroll_pos < eighth || y_scroll_pos > eighth+800){
         $("#wedding_menu_div").css("display", "none");
         // $("#c_wedding_menu").css("font-size","25px");
      }
      //Ideas
      //
      //

        if(y_scroll_pos < ninth ||y_scroll_pos > eleventh ){
           $("#main_div_ideas").css("display", "none");
        $("#hide_divs_id_three").slideUp('slow');
         // $("#c_ideas").css("font-size","28px");
    }
if(y_scroll_pos > ninth && y_scroll_pos <  eleventh ) {
       $("#main_div_ideas").css("display", "block");
       $("#hide_divs_id_three").slideDown('slow');
       // $("#c_ideas").css("font-size","35px");
    }
 
    if(y_scroll_pos > tenth && y_scroll_pos < tenth+800){
         $("#yours_div").css("display", "block");
         // $("#c_yours").css("font-size","35px");
      
    }
    if(y_scroll_pos < tenth || y_scroll_pos > tenth+800){
         $("#yours_div").css("display", "none");
         // $("#c_yours").css("font-size","25px");
      }
      if(y_scroll_pos > eleventh && y_scroll_pos < eleventh+800){

         $("#mine_div").css("display", "block");
         $('html, body').clearQueue();
         // $("#c_mine").css("font-size","35px");
        
      
    }
    if(y_scroll_pos < eleventh || y_scroll_pos > eleventh+800){
         $("#mine_div").css("display", "block");
         $('html, body').clearQueue();
     
         // $("#c_mine").css("font-size","25px");
      }
      //Plan
      //
      //

  if(y_scroll_pos <  eleventh -800 ||y_scroll_pos >twelfth+800 ){
      $("#main_div_plan").css("display", "none");
      // $("#hide_divs_id_four").slideUp('slow');
      // $("#c_plan").css("font-size","28px");
    }
if(y_scroll_pos >  eleventh  -800 && y_scroll_pos < twelfth+800) {
       $("#main_div_plan").css("display", "block");

     
       // $("#hide_divs_id_four").slideDown('slow');
       // $("#c_plan").css("font-size","35px");
    }
  
    });


function setCharAt(mouseLeave,index,chr) {
    if(index > mouseLeave.length-1) return mouseLeave;
    return mouseLeave.substr(0,index) + chr + mouseLeave.substr(index+1);
}
// $(document).ready(function(){

//     $('area').click(function(evt){
//         evt.preventDefault();
//       var currentId =  $(this).data('imageurl');

// $("#IMGMAPS").attr('src', currentId);
//   //     var color = $(this).css("background-color");
//   //     $(this).css("background","#380606");
//   // evt.preventDefault();
//   //     $(this).bind("mouseout", function(){
//   //       $(this).css("background","#123212");
//   //     })
//         // $('#modal-content').html('<img src=' + $(this).data('imageurl') +'>');
//         // $('#modal-background').fadeIn();
//      })
//      $("#building").mouseenter(function (evt) {
      
//          evt.preventDefault();
//               $("#IMGMAPS").attr('src', '/assets/plan10.png');
//         }).mouseleave(function (evt)
//         {
//          evt.preventDefault();
         
//              $("#IMGMAPS").attr('src', currentId);

//         });

//    });







