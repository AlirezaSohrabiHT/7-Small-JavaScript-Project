const btn = document.querySelector('.search');
const overlay = document.querySelector('.search-overlay');
const popup = document.querySelector('.search-popup');

btn.addEventListener('click',function(){
    overlay.classList.add('active');
    popup.classList.add('active');
})

overlay.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
})