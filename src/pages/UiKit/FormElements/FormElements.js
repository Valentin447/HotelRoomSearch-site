import './../../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import './../../../blocks/dropdown/dropdown';
import './../../../blocks/checkbox/checkbox';


let dropdownOpen = document.querySelectorAll('.FormElements .dropdown_rooms .dropdown__list');
dropdownOpen[1].className += " dropdown__list_open";

let dropdownToogleNoRadius = document.querySelectorAll('.FormElements .dropdown_rooms .dropdown__toggle');
dropdownToogleNoRadius[1].className += " dropdown__toogle_noRadius";

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
