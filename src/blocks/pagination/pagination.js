let quantityRooms = 180;
let quantityPages = Math.ceil(quantityRooms / 12);

let paginations = document.querySelectorAll('.pagination');
for (let pagination of paginations) {
    let buttons = pagination.querySelectorAll('.pagination__button');
    let buttonsNumber = pagination.querySelectorAll('.pagination__button_number');
    for (let i = 0; i < 9; i++) {
        if (quantityPages < 6){
            for(let j = 0; j < buttonsNumber.length; j++){
                buttonsNumber[0].classList.add('pagination__button_target');
                if(j < quantityPages){
                    buttonsNumber[j].setAttribute('value', j+1);
                } else {
                    buttonsNumber[j].classList.add('pagination__button_hidden');
                }
            }
            buttons[0].classList.add('pagination__button_hidden');
            buttons[2].classList.add('pagination__button_hidden');
            buttons[6].classList.add('pagination__button_hidden');
            if(quantityPages < 2){
                buttons[8].classList.add('pagination__button_hidden');
            }
        }
        if (quantityPages > 5) {
            switch (i) {
                case 1:
                    buttons[1].classList.add('pagination__button_target');
                    buttons[1].setAttribute('value', 1);
                    break
                case 3:
                    buttons[3].setAttribute('value', 2);
                    break
                case 4:
                    buttons[4].setAttribute('value', 3);
                    break
                case 7:
                    buttons[7].setAttribute('value', quantityPages);
                    break
            }
            buttons[0].classList.add('pagination__button_hidden');
            buttons[2].classList.add('pagination__button_hidden');
            buttons[5].classList.add('pagination__button_hidden');
        }
    }
    let pageNumberCurrent = 1;
    buttons[0].onclick = function () {
        if(pageNumberCurrent > 1){
            pageNumberCurrent--;
            handlerCleanTarget(pagination);
            paintPagination(pageNumberCurrent, pagination);
            textDescriptions(pageNumberCurrent, pagination);
        }
    }
    buttons[8].onclick = function () {
        if(pageNumberCurrent < quantityPages){
            pageNumberCurrent++;
            handlerCleanTarget(pagination);
            paintPagination(pageNumberCurrent, pagination);
            textDescriptions(pageNumberCurrent, pagination);
        }
    }
    buttons[1].onclick = function () {
        pageNumberCurrent = 1;
        handlerCleanTarget(pagination);
        paintPagination(pageNumberCurrent, pagination);
        textDescriptions(pageNumberCurrent, pagination);
    }
    buttons[3].onclick = function () {
        pageNumberCurrent = buttons[3].getAttribute('value');
        handlerCleanTarget(pagination);
        paintPagination(pageNumberCurrent, pagination);
        textDescriptions(pageNumberCurrent, pagination);
    }
    buttons[4].onclick = function () {
        pageNumberCurrent = buttons[4].getAttribute('value');
        handlerCleanTarget(pagination);
        paintPagination(pageNumberCurrent, pagination);
        textDescriptions(pageNumberCurrent, pagination);
    }
    buttons[5].onclick = function () {
        pageNumberCurrent = buttons[5].getAttribute('value');
        handlerCleanTarget(pagination);
        paintPagination(pageNumberCurrent, pagination);
        textDescriptions(pageNumberCurrent, pagination);
    }
    buttons[7].onclick = function () {
        pageNumberCurrent = buttons[7].getAttribute('value');
        handlerCleanTarget(pagination);
        paintPagination(pageNumberCurrent, pagination);
        textDescriptions(pageNumberCurrent, pagination);
    }
}

function paintPagination(pageNumberCurrent, pagination) {
    let buttons = pagination.querySelectorAll('.pagination__button');
    // Показать/скрыть кнопки со стрелками
    if (pageNumberCurrent > 1) {
        buttons[0].classList.remove('pagination__button_hidden');
    } else {
        buttons[0].classList.add('pagination__button_hidden');
    }
    if (+pageNumberCurrent === quantityPages) {
        buttons[8].classList.add('pagination__button_hidden');
    } else {
        buttons[8].classList.remove('pagination__button_hidden');
    }

    // Показать/скрыть кнопки с точками
    if (quantityPages > 5 && (+pageNumberCurrent + 2) < quantityPages) {
        buttons[6].classList.remove('pagination__button_hidden');
    } else {
        buttons[6].classList.add('pagination__button_hidden');
    }
    if (quantityPages > 5 && pageNumberCurrent > 3) {
        buttons[2].classList.remove('pagination__button_hidden');
    } else {
        buttons[2].classList.add('pagination__button_hidden');
    }

    // Изменение кнопки таргет
    if(quantityPages > 5){
        switch (+pageNumberCurrent) {
            case 1:
                buttons[1].classList.add('pagination__button_target');
                buttons[0].classList.add('pagination__button_hidden');
                buttons[2].classList.add('pagination__button_hidden');
                buttons[5].classList.add('pagination__button_hidden');
                break
            case 2:
                buttons[3].classList.add('pagination__button_target');
                buttons[2].classList.add('pagination__button_hidden');
                buttons[5].classList.add('pagination__button_hidden');
                break
            case 3:
                buttons[4].classList.add('pagination__button_target');
                buttons[2].classList.add('pagination__button_hidden');
                break
            case quantityPages:
                buttons[7].classList.add('pagination__button_target');
                buttons[3].classList.add('pagination__button_hidden');
                buttons[6].classList.add('pagination__button_hidden');
                buttons[8].classList.add('pagination__button_hidden');
                break
            case quantityPages - 1:
                buttons[5].classList.add('pagination__button_target');
                buttons[3].classList.add('pagination__button_hidden');
                buttons[6].classList.add('pagination__button_hidden');
                break
            case quantityPages - 2:
                buttons[4].classList.add('pagination__button_target');
                buttons[6].classList.add('pagination__button_hidden');
                break
            default:
                buttons[4].classList.add('pagination__button_target');
                break
        }
    } else {
        let buttonsNumber = pagination.querySelectorAll('.pagination__button_number');
        buttonsNumber[pageNumberCurrent - 1].classList.add('pagination__button_target');
    }

    // Изменение цифр в зависимости от текущей страницы
    if(quantityPages > 5){
        if(pageNumberCurrent === 1){
            buttons[3].setAttribute('value', 2);
            buttons[4].setAttribute('value', 3);
            buttons[5].setAttribute('value', 4);
        }
    
        if(+pageNumberCurrent === quantityPages){
            buttons[4].setAttribute('value', quantityPages - 2);
            buttons[5].setAttribute('value', quantityPages - 1);
        }
    
        if (pageNumberCurrent > 2 && pageNumberCurrent < (quantityPages - 1)) {
            buttons[3].setAttribute('value', +pageNumberCurrent - 1);
            buttons[4].setAttribute('value', pageNumberCurrent);
            buttons[5].setAttribute('value', +pageNumberCurrent + 1);
        }
    }
}

function handlerCleanTarget(pagination){
    let buttons = pagination.querySelectorAll('.pagination__button');
    for(let button of buttons){
        button.classList.remove('pagination__button_target');
        if(quantityPages > 5 || button.classList.contains('pagination__button_forward-back')){
            button.classList.remove('pagination__button_hidden');
        }
    }
}

function textDescriptions(pageNumberCurrent, pagination){
    let paginationText = pagination.querySelector('.pagination__text');
    let quantityRoomsString;
    if(quantityRooms < 100){
        quantityRoomsString = quantityRooms;
    } else {
        quantityRoomsString = '100+';
    }
    let intervalStop = pageNumberCurrent * 12;
    let intervalStart = intervalStop - 11;
    if(intervalStop > quantityRooms){
        intervalStop = quantityRooms;
    }
    let text = intervalStart + ' – ' + intervalStop + ' из ' + quantityRoomsString + ' вариантов аренды';
    paginationText.innerHTML = text;
}
