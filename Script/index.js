
        var menuclicked = 0;
    document.getElementById("menu-btn").addEventListener("click", function(e) {
        
        
        if(menuclicked%2 == 0) {
            document.getElementsByClassName("nav-middle-ul")[0].style.display = "block";
           
        }
        else
        {
            document.getElementsByClassName("nav-middle-ul")[0].style.display = "none";
        }
        menuclicked++;
});

var x = 2;
document.getElementById("show-more").addEventListener("click", function(e) {
    if(x==3){
        document.getElementsByClassName("btn")[0].style.display="none";
    }
    document.getElementsByClassName("corosal"+x)[0].style.display="flex";
    x=x+1;
    if(x==4)
    {
        document.getElementsByClassName("Hide")[0].style.display="flex";
    }
});

document.getElementById("Hide").addEventListener("click",function(e) {
   
    document.getElementsByClassName("corosal3")[0].style.display="none";
    document.getElementsByClassName("corosal2")[0].style.display="none";
    x=x-2;
    if(x==2){
        document.getElementsByClassName("btn")[0].style.display="flex";
        document.getElementsByClassName("Hide")[0].style.display="none";
    }
});

var a=document.getElementById("card-testimonial1").addEventListener("click",function(e) {
    document.getElementsByClassName("card-testimonial-p1")[0].style.display="flex";
});
var a=document.getElementById("card-testimonial2").addEventListener("click",function(e) {
    document.getElementsByClassName("card-testimonial-p2")[0].style.display="flex";
});
var a=document.getElementById("card-testimonial3").addEventListener("click",function(e) {
    document.getElementsByClassName("card-testimonial-p3")[0].style.display="flex";
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
