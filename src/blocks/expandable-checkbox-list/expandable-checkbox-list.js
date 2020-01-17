let expandableCheckboxList = document.querySelectorAll('.expandable-checkbox-list');

let listOpenClosed = function(){}

for(let checkbox of expandableCheckboxList){
    let arrowButton = checkbox.querySelector('.expandable-checkbox-list__title-arrow .arrow');
    let isArrowUp = arrowButton.classList.contains('arrow_up');
    let list = checkbox.querySelector('.expandable-checkbox-list__list');
    let isListClosed = list.classList.contains('expandable-checkbox-list__list_closed');

    if(isArrowUp && isListClosed){
        list.classList.remove('expandable-checkbox-list__list_closed');
    }
    if(!isArrowUp && !isListClosed)
    {
        list.classList.add('expandable-checkbox-list__list_closed');
    }

    arrowButton.onclick = function(){ 
        let isArrowUp = arrowButton.classList.contains('arrow_up');
        let list = checkbox.querySelector('.expandable-checkbox-list__list');
        if(isArrowUp){
            arrowButton.classList.remove('arrow_up');
            list.classList.add('expandable-checkbox-list__list_closed');
        } else {
            arrowButton.classList.add('arrow_up');
            list.classList.remove('expandable-checkbox-list__list_closed');
        }

    }
}