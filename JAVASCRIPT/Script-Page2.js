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