const hamburger = document.querySelector(".hamburger"); // selecting the hamburger class(icon)
const menu = document.querySelector(".nav-menu");   // selecting the nav items( li / a)

//adding active classes to the menu icon
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})



// adding active link states to nav links (white border-bottom)
document.querySelectorAll('.nav-link').forEach(link =>{
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})

// Making the video play on hover/mouseover

const myVideo = document.querySelectorAll(".vid"); // selecting all of the videos

for(let i = 0; i < myVideo.length; i++){

    //when mouse hovers over each video the video starts playing
    myVideo[i].addEventListener('mouseenter',()=>{
        myVideo[i].play()
    })
    
    //when mouse hovers out the video,it stops
    myVideo[i].addEventListener('mouseout',()=>{
        myVideo[i].pause() 
    })
}