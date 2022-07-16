const favicon = document.getElementById('favicon');
const btn_red = document.getElementById('btn-red');
const btn_blue = document.getElementById('btn-blue');

btn_red.addEventListener("click",FaviconChangeToRed);
btn_blue.addEventListener("click",FaviconChangeToBlue);
function FaviconChangeToRed(e){
         favicon.setAttribute('href','./SRC/Favicon/red.png')
}
function FaviconChangeToBlue(e){
    favicon.setAttribute('href','./SRC/Favicon/Blue.png')
}

//////////////////////////////////////////////

const password = document.getElementById('pass');
const eye = document.getElementById('eye');
const eyeslash = document.getElementById('eye-slash');
eye.addEventListener("click",Showpass);

function Showpass(e){
    if (password.type === 'password'){
        password.setAttribute('type','text');
        eye.classList.add('hide');
    }
    else{
        password.setAttribute('type','password')
        eye.style.display = 'none';
        eyeslash.style.display = 'block';
        eye.classList.remove('hide');
    }
}


///////////////////////////////////