const container = document.querySelector('.Carrossel');
const sliders = document.querySelectorAll('.Carrossel img');


const next = document.querySelector('.btn-next');
const back = document.querySelector('.btn-back');

let count = 1;
const size = sliders[0].clientWidth;

container.style.transform = `translateX(${-size * count}px)`

const activeSliders = document.querySelectorAll('.active-sliders .circle');
activeSliders[0].classList.add('active')

next.addEventListener('click', () => {
    if(count >= sliders.length - 1) return ;
    container.style.transition = 'transform 0.4s ease-in-out';
    count++;
    container.style.transform = `translateX(${-size * count}px)`
});



back.addEventListener('click', () => {
    if(count <= 0) return;
    container.style.transition = 'transform 0.4s ease-in-out';
    count--;
    container.style.transform = `translateX(${-size * count}px)`
});



container.addEventListener('transitionend',  () => {

    if(sliders[count].id === 'last'){

        container.style.transition = "none";
        count = sliders.length -2;
        container.style.transform = `translateX(${-size * count}px)`

    }

    if(sliders[count].id === 'first'){

        container.style.transition = "none";
        count = sliders.length - count;
        container.style.transform = `translateX(${-size * count}px)`

    }

    for(i = 0; i < activeSliders.length; i++){
        if(activeSliders[i].classList.contains('active') === true){
            activeSliders[i].classList.remove('active');
        }
    }

    activeSliders[count].classList.add('active')

})
