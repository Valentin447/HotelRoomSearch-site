let blocksRangeSlider = document.querySelectorAll('.range-slider');
for(let blockRangeSlider of blocksRangeSlider){
    let pointStart = blockRangeSlider.querySelector('.range-slider__point-start');
    let pointStop = blockRangeSlider.querySelector('.range-slider__point-stop');
    let interval = blockRangeSlider.querySelector('.range-slider__interval');
    let input = blockRangeSlider.querySelector('.range-slider__value');
    let blockDOMRect = blockRangeSlider.getBoundingClientRect();

    let startX;

    let pointStartOrStop;
function mouseMove(mousemoveEvent){
        let coordinateMouseX = mousemoveEvent.clientX;
        let pointStartDOMRect = pointStart.getBoundingClientRect();
        let pointStopDOMRect = pointStop.getBoundingClientRect();
        let difference = coordinateMouseX - startX;
        let positionLeft = pointStart.style.left;
        

        if(blockDOMRect.x < coordinateMouseX && (blockDOMRect.x + blockDOMRect.width) > coordinateMouseX){
            positionLeft = (difference + (startX - blockDOMRect.x) - 6) + "px";
            let valueStart = 5000;
            let valueStop = 10000;
            if(pointStartOrStop === pointStart){
                pointStart.style.left = positionLeft;
                valueStart = ((pointStartDOMRect.x - blockDOMRect.x) / 15) * 1000; // 15 пикселей на шкале равно 1000 рублям
                if(valueStart < 0){
                    valueStart = 0;
                }
            } else {
                pointStop.style.left = positionLeft;
                valueStop = ((pointStopDOMRect.x - blockDOMRect.x) / 15) * 1000; // 15 пикселей на шкале равно 1000 рублям
            }
            // TODO: При быстром движении точек выбора, зеленая полоска интервала выходит за края точек
            interval.style.left = (pointStartDOMRect.x - blockDOMRect.x + 6) + "px";   
            interval.style.width = (pointStopDOMRect.x - pointStartDOMRect.x + 6) + "px";

            input.setAttribute('value',  addSpace(valueStart) + '₽ - ' + addSpace(valueStop) + '₽');
        }
    }

function addSpace(number){
    let thousands = Math.round(number / 1000);
    let hundreds = Math.round(number) % 1000;
    if(thousands === 0){
        return hundreds;
    }
    if(thousands !== 0 && hundreds < 100 && hundreds > 10){
        return thousands + ' 0' + hundreds;
    }
    if(thousands !== 0 && hundreds < 10){
        return thousands + ' 00' + hundreds;
    }
    return thousands + ' ' + hundreds;
}
    
function handlerMouseDown(pointStartEvent){
        pointStartOrStop = pointStartEvent.currentTarget;
        startX = pointStartEvent.clientX;
        document.addEventListener('mousemove', mouseMove);
        onmouseup = function(){
            this.document.removeEventListener('mousemove', mouseMove);
        }
    }

    pointStart.addEventListener('mousedown', handlerMouseDown);
    pointStop.addEventListener('mousedown', handlerMouseDown);
}