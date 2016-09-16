$( document ).ready(function() {

       $(".element").typed({
           strings: ["Tech Enthusiast", "Student", "Software Engineer", "Tech Enthusiast - Student - Software Engineer"],
           typeSpeed: 0,
           backDelay: 500,
           cursorChar: "",
           backSpeed:2

       });

      // $(".element").html("Tech Enthusiast");

      $("#octo2").click(function() {
          $('html,body').animate({
              scrollTop: $(".aboutme").offset().top},
              'slow');
      });
      $("#octo").mouseover(function() { $("#gi").css('visibility','visible'); });
      $("#octo").mouseout(function() { $("#gi").css('visibility','hidden'); });

      $("#octo3").mouseover(function() { $("#re").css('visibility','visible'); });
      $("#octo3").mouseout(function() { $("#re").css('visibility','hidden'); });

      $("#linked").mouseover(function() { $("#li").css('visibility','visible'); });
      $("#linked").mouseout(function() { $("#li").css('visibility','hidden'); });

      $("#octo2").mouseover(function() { $("#ab").css('visibility','visible'); });
      $("#octo2").mouseout(function() { $("#ab").css('visibility','hidden'); });
      $("#octo2").mouseover(function() { $("#octo2").css('color','#2db1d2'); });
        $("#octo2").mouseout(function() { $("#octo2").css('color','white'); });
   });

$(".wallpaper").css("min-height", $(window).height() );
