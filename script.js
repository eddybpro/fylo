const getStartedBtn = document.querySelector('.get-started-btn'),
inputEmail = document.querySelector('.email');

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
getStartedBtn.addEventListener('click', ()=>{
    if(!regex.test(inputEmail.value)){
        if(window.screen.width<768){
            getStartedBtn.classList.add('error');
        }else{
            document.querySelector('.form').classList.add('error');
        }
    }else{
        getStartedBtn.classList.remove('error');
        document.querySelector('.form').classList.remove('error');
    }
})