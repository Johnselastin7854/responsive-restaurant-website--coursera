const navigation=document.querySelector(".navigation__item");
const icon=document.querySelector(".menu-icon");


icon.addEventListener("click",()=>{
   navigation.classList.toggle("active")
})