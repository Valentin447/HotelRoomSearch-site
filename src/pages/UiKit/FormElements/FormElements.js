import './../../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import './../../../blocks/dropdown/dropdown';
import './../../../blocks/checkbox/checkbox';
import './../../../blocks/radio-button/radio-button';
import './../../../blocks/toggle/toggle';
import './../../../blocks/like-button/like-button';
import './../../../blocks/rate-button/rate-button';
import './../../../blocks/range-slider/range-slider';
import './../../../blocks/pagination/pagination';


let dropdownOpen = document.querySelectorAll('.FormElements .dropdown_rooms .dropdown__list');
dropdownOpen[1].className += " dropdown__list_open";

let dropdownToogleNoRadius = document.querySelectorAll('.FormElements .dropdown_rooms .dropdown__toggle');
dropdownToogleNoRadius[1].className += " dropdown__toogle_noRadius";

// Делаем Dropdown как на UiKit по умолчанию
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns[5].classList.add('dropdown_open');
dropdowns[6].classList.add('dropdown_open');
dropdowns[6].querySelector('.dropdown__button-clean-input').classList.add('dropdown__button-clean_hidden');
dropdowns[7].classList.add('dropdown_open');

// Делаем Expandable Checkbox List как на UiKit по умолчанию
let expandableCheckboxList = document.querySelectorAll('.expandable-checkbox-list');
let openCheckboxList = expandableCheckboxList[1].querySelector('.expandable-checkbox-list__title-arrow .arrow');
let list = expandableCheckboxList[1].querySelector('.expandable-checkbox-list__list');
    // Стрелачку вверх
openCheckboxList.classList.add('arrow_up');
    // Список видимый
list.classList.remove('expandable-checkbox-list__list_closed');
let checkboxs = expandableCheckboxList[1].querySelectorAll('.checkbox');
    // Отмечаем элементы с 2 по 4
checkboxs[1].classList.add('checkbox_checked');
checkboxs[2].classList.add('checkbox_checked');
checkboxs[3].classList.add('checkbox_checked');

// Делаем Checkbox Buttons как на UiKit по умолчанию
let checkboxButtons = document.querySelectorAll('.checkbox-buttons');
let checkbox = checkboxButtons[0].querySelectorAll('.checkbox');
    // Отмечаем элементы 2 и 3
checkbox[1].classList.add('checkbox_checked');
checkbox[2].classList.add('checkbox_checked');

// Делаем Radio Buttons как на UiKit по умолчанию
let radioButton = document.querySelectorAll('.radio-button');
let radioButtonInput = radioButton[0].querySelector('input');
radioButtonInput.click();

// Делаем Toggle как на UiKit по умолчанию
let toggle = document.querySelectorAll('.toggle');
let input = toggle[0].querySelector('.toggle__switch-input');
input.setAttribute('checked', 'checked');
toggle[0].classList.add('toggle__switch_on');

// Делаем Like Button как на UiKit по умолчанию
let likeButtons = document.querySelectorAll('.like-button');
let likeButtonsChecked = likeButtons[1].querySelector('.like-button-input:checked');
if(!likeButtonsChecked){
    likeButtons[1].click();
}

// Делаем Like Button в блоке Comment как на UiKit по умолчанию
let comments = document.querySelectorAll('.comment');
let commentLikeButtons = comments[0].querySelector('.like-button-input');
let commentLikeButtonsChecked = comments[0].querySelector('.like-button-input:checked');
if(!commentLikeButtonsChecked){
    commentLikeButtons.click();
}

// Делаем Buttons как на UiKit по умолчанию
let buttonFilled = document.querySelectorAll('.FormElement-column-3 .button_filled .button-input');
buttonFilled[1].classList.add('button-input-hover');
let buttonEmpty = document.querySelectorAll('.FormElement-column-3 .button_empty .button-frame-gradient');
buttonEmpty[1].classList.add('button-frame-gradient-hover');
let buttonNoFrame = document.querySelectorAll('.FormElement-column-3 .button_no-frame .button-input');
buttonNoFrame[1].classList.add('button-input-hover');