var links = document.querySelectorAll('header .navbar a');

links.forEach(function(link) {
    link.onclick = ()=>{
        let siblings = link.parentElement.children;

        for(let i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove('active');
        }
    
        link.classList.add('active');
    }
    
})