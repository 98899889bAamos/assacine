
/*====SHOW MENU====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
  }
  showMenu('nav-toggle','nav-menu')
  
  /*====REMOVE MENU MOBILE====*/
  const navLink = document.querySelectorAll('.drop-bio')
  
  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  /*====End of Show Left MENU====*/
  



/*faq*/

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

/*End of faq*/

let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}





