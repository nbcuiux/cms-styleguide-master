$('.video').parent().click(function () {
  console.log('.video');
     if($(this).children(".video").get(0).paused){
         $(this).children(".video").get(0).play();
         $(this).children(".video-overlay").fadeOut();
     }else{
        $(this).children(".video").get(0).pause();
         $(this).children(".video-overlay").fadeIn();
     }
 });
