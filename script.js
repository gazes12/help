/*Компоненты слайдера*/
const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');
const sliderItems = document.querySelectorAll('.slider__item');


/*Кнопки*/
const arrowNext = document.querySelector('.slider__arrow--next');
const arrowPrev =  document.querySelector('.slider__arrow--prev');


/*Пустые переменные*/
let transform = 0;

/*Вычисления*/
let widthSliderItem = 0;
sliderItems.forEach(sliderItem =>{
    widthSliderItem = sliderItem.offsetWidth;
});

/*Проверка на устройства*/
if(window.outerWidth < 815){
    console.log('MOBILE');
    /*Логика на телефоны*/
    slider.onclick = () =>{
        transform += widthSliderItem;
        moveMobile();

        function moveMobile(){
            sliderLine.style.transform = `translateX(-${transform}px)`;
            if(transform == widthSliderItem * sliderItems.length){
                transform = 0;
                sliderLine.style.transform = `translateX(-0px)`;
            }
        }
    }
}else{
    console.log('PC');
    /*Логика на пк*/
    movePc();

    arrowNext.onclick = () =>{
        transform += widthSliderItem;
        movePc();
    }

    arrowPrev.onclick = () =>{
        transform -= widthSliderItem;
        movePc();
    }

    function movePc(){
        sliderLine.style.transform = `translateX(-${transform}px)`;   


        /*Проверка на кнопки*/

        /*Кнопка назад*/
        if(transform == 0){
            arrowPrev.classList.add('lock');
        }else{
            arrowPrev.classList.remove('lock');
        } 

        /*Кнопка вперед*/
        if(transform == widthSliderItem * sliderItems.length - widthSliderItem){
            arrowNext.classList.add('lock');
        }else{
            arrowNext.classList.remove('lock');
        }

    }
}