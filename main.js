var links = document.querySelectorAll('header .navbar a');
var section = document.querySelectorAll('section');
var menu = document.querySelector("#menu");

menu.onclick = () =>{
    document.querySelector("#menu").classList.toggle("fa-times");
    document.querySelector("header .navbar").classList.toggle("active");
}

links.forEach(function(link) {
    link.onclick = ()=>{
        let siblings = link.parentElement.children;

        for(let i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove('active');
        }
    
        link.classList.add('active');
    }
    
})


var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    centeredSlider: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false
    },
    loop: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },

        550: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 3,
        },

    }
  });


window.onscroll = () =>{

    menu.classList.remove('fa-times');
    document.querySelector("header .navbar").classList.remove("active");

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let id= sec.getAttribute('id');
     
        if(top >= offset && top < offset + height){
          
            links.forEach(link =>{
                
                link.classList.remove('active');
            })
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');


        }
    })
}