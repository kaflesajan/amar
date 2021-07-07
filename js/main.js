$(document).ready(function(){
$(window).scroll(function(){
    if($(this).scrollTop()> 100)
    {
       $("header") .addClass("fi");
       $(".arrow") .addClass("ee");
    }
    else
    {
        $("header").removeClass("fi");
        $(".arrow").removeClass("ee");
    }
})




    $(".cc").owlCarousel({
        items:1,
        loop:true,
        nav:true,
    });
    $(".dd").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        margin:20,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });

    $(".mb").click(function(){
        $("nav ul").toggle();
    })

  });

  var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}