const content=document.querySelector(".content");
const hamburgerIcon=document.querySelector(".hamburger-menu-container");
const headerContent=document.querySelector(".header-content");
const closeIcon=document.querySelector(".close-icon");
const scrollTop=document.querySelector(".top");
const nav = document.querySelector("nav");



hamburgerIcon.addEventListener("click",(e)=>{
    e.stopPropagation();
   headerContent.classList.add("menu-open");
})



nav.addEventListener("click",(e)=>{
    e.stopPropagation();
})





closeIcon.addEventListener("click",(e)=>{
    
    headerContent.classList.remove("menu-open");
})


scrollTop.addEventListener("click",(e)=>{
   
    e.preventDefault();
    content.scrollTo(0,0)

     
})



window.addEventListener("click",()=>{
    headerContent.classList.remove("menu-open");
})
