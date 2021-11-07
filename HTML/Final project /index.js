const city = document.querySelector(".city");
const choiceCity = document.getElementById('choice__city');
const call = document.getElementById('call');
const exit = document.querySelector('.exit');
const exitCall = document.querySelector('.exit_call');
const telForm = document.querySelector('.tel__form');

city.addEventListener('click', function(e){
    choiceCity.classList.remove('display__none');
})

exit.addEventListener('click', () => {
    choiceCity.classList.add('display__none');


})
exitCall.addEventListener('click', () => {
    call.classList.add('display__none');
})

telForm.addEventListener('click', () => {
    call.classList.remove('display__none');
})

