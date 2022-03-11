// За основу взят слайдер с habr.com/ru/post/468253/

class Sim{
    
    constructor(sldrRoot){
        this.sldrRoot = sldrRoot;
        this.sldrList = this.sldrRoot.querySelector('.room-card__slides');
        this.sldrElements = this.sldrList.querySelectorAll('.room-card__slides-item');
        this.sldrElemFirst = this.sldrList.querySelector('.room-card__slides-item');
        this.leftArrow = this.sldrRoot.querySelector('.room-card__left-button');
        this.rightArrow = this.sldrRoot.querySelector('.room-card__right-button');
        this.leftShadow = this.sldrRoot.querySelector('.room-card__slider-shadow-left');
        this.rightShadow = this.sldrRoot.querySelector('.room-card__slider-shadow-right');
        this.indicatorDots = this.sldrRoot.querySelector('.room-card__dots');
        this.defaults = {
            loop: true,     // Бесконечное зацикливание слайдера
            arrows: true,   // Пролистывание стрелками
            dots: true      // Индикаторные точки
        };
        this.options = this.defaults;
        this.currentElement = 0;
        this.indicatorDotsAll = this.indicatorDots;
        this.elemCount = this.sldrElements.length;
        this.prevElement = this.currentElement;
    }

    dotOn(num) {
        this.indicatorDotsAll[num].classList.remove('room-card__dots-item_current');
    };

    dotOff(num) {
        this.indicatorDotsAll[num].classList.add('room-card__dots-item_current');
    };

    elemPrev(num) {
        num = num || 1;
        
        this.prevElement = this.currentElement;
        this.currentElement -= num;

        if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

        if (!this.options.loop) {
            if (this.currentElement == 0) {
                this.leftArrow.style.display = 'none'
            };
            this.rightArrow.style.display = 'block'
        };

        this.sldrElements[this.currentElement].style.opacity = '1';
        this.sldrElements[this.prevElement].style.opacity = '0';

        if (this.options.dots) {
            this.dotOn(this.prevElement); 
            this.dotOff(this.currentElement);
        }
    };

    elemNext(num) {
        num = num || 1;

        this.prevElement = this.currentElement;
        this.currentElement += num;
        if (this.currentElement >= this.elemCount) this.currentElement = 0;

        if (!this.options.loop) {
            if (this.currentElement == this.elemCount - 1) {
                this.rightArrow.style.display = 'none'
            };
            this.leftArrow.style.display = 'block'
        };

        this.sldrElements[this.currentElement].style.opacity = '1';
        this.sldrElements[this.prevElement].style.opacity = '0';

        if (this.options.dots) {
            this.dotOn(this.prevElement); 
            this.dotOff(this.currentElement)
        }
    };

    initialize() {

        // Start initialization
        if (this.elemCount <= 1) {   // Отключить навигацию
            this.options.arrows = false; this.options.dots = false;
            this.leftArrow.style.display = 'none'; this.rightArrow.style.display = 'none'
        };
        if (this.elemCount >= 1) {   // показать первый элемент
            this.sldrElemFirst.style.opacity = '1';
        };


    } 
};

function getTime() {
    return new Date().getTime();
};

let bgTime = getTime();

function start(){
    let sldrAll = document.querySelectorAll('.room-card__slider');
    for(let sldrRoot of sldrAll){
        let slid = new Sim(sldrRoot);
        slid.initialize();
        initializeDots(slid);
        slid.sldrRoot.addEventListener('mouseover', function() {           
            slid.leftArrow.style.display = 'flex';
            slid.rightArrow.style.display = 'flex';
            slid.leftShadow.style.display = 'block';
            slid.rightShadow.style.display = 'block';
        });
        slid.sldrRoot.addEventListener('mouseout', function() {
            slid.leftArrow.style.display = 'none';
            slid.rightArrow.style.display = 'none';
            slid.leftShadow.style.display = 'none';
            slid.rightShadow.style.display = 'none';
        });
        slid.leftArrow.addEventListener('click', function () {
            let fnTime = getTime();
            if (fnTime - bgTime > 500) {
                bgTime = fnTime; slid.elemPrev()
            }
        }, false);
        slid.rightArrow.addEventListener('click', function () {
            let fnTime = getTime();
            if (fnTime - bgTime > 500) {
                bgTime = fnTime; slid.elemNext()
            }
        }, false)
    }
} 

function initializeDots(slid){
    if (slid.options.dots) {  // инициализация индикаторных точек
        slid.indicatorDotsAll = slid.sldrRoot.querySelectorAll('.room-card__dots-item');
        // Назначаем точкам обработчик события 'click'
        for (let n = 0; n < slid.elemCount; n++) {
            slid.indicatorDotsAll[n].addEventListener('click', function () {
                diffNum = Math.abs(n - slid.currentElement);
                if (n < slid.currentElement) {
                    bgTime = getTime(); 
                    slid.elemPrev(diffNum);
                }
                else if (n > slid.currentElement) {
                    bgTime = getTime(); 
                    slid.elemNext(diffNum);
                }
                // Если n == that.currentElement ничего не делаем
            }, false)
        };
    }

    slid.dotOff(0);  // точка[0] выключена, остальные включены
    for (let i = 1; i < this.elemCount; i++) {
        slid.dotOn(i);
    }   
}

start();