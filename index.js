document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const  burger = document.querySelector('.burger');
    const  nav = document.querySelector('.cont');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}