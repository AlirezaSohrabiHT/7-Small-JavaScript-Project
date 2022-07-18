const favicon = document.getElementById('favicon');
const btn_red = document.getElementById('btn-red');
const btn_blue = document.getElementById('btn-blue');

btn_red.addEventListener("click",FaviconChangeToRed);
btn_blue.addEventListener("click",FaviconChangeToBlue);
function FaviconChangeToRed(e){
         favicon.setAttribute('href','../SRC/Favicon/red.png')
}
function FaviconChangeToBlue(e){
    favicon.setAttribute('href','../SRC/Favicon/Blue.png')
}