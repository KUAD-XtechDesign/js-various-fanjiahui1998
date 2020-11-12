$(function(){

    $("#bj").hide().fadeIn(1000)
    $("#bj").on("click",bjAnime)
  
    function bjAnime(){
      $("#bj").fadeOut(1000,tpAnime);
    }
  
    function tpAnime(){
      setTimeout(t4Anime,2000);
      setTimeout(t3Anime,4000);
      setTimeout(t11Anime,5000);
    }
    function t4Anime(){
      $("#t4").addClass("anime")
    }
  
    function t3Anime(){
      $("#t3").addClass("anime")
    }

    function t11Anime(){
      $("#t11").addClass("anime")
    }


})

