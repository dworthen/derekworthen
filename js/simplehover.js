// JavaScript Document


  $(document).ready(function(){
    $(".imghovershell").hover(function() {
      $(this).stop().animate({opacity: "0.3"}, 'fast');
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 'slow');
    });
  });
  
  
  
  
    $(document).ready(function(){
    $(".imghover").hover(function() {
      $(this).stop().animate({opacity: "0.8"}, 'fast');
    },
    function() {
      $(this).stop().animate({opacity: "1"}, 'slow');
    });
  });