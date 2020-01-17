import './../../../blocks/expandable-checkbox-list/expandable-checkbox-list';
import './../../../blocks/dropdown/dropdown';
import './../../../blocks/checkbox/checkbox';


let dropdownOpen = document.querySelectorAll('.FormElements .dropdown_rooms .dropdown__list');
dropdownOpen[1].className += " dropdown__list_open";

let dropdownToogleNoRadius = document.querySelectorAll('.FormElements .dropdown_rooms .dropdown__toggle');
dropdownToogleNoRadius[1].className += " dropdown__toogle_noRadius";

let expandableCheckboxList = document.querySelectorAll('.expandable-checkbox-list');
let openCheckboxList = expandableCheckboxList[1].querySelector('.expandable-checkbox-list__title-arrow .arrow');
let list = expandableCheckboxList[1].querySelector('.expandable-checkbox-list__list');
openCheckboxList.classList.add('arrow_up');
list.classList.remove('expandable-checkbox-list__list_closed');

let checkboxs = expandableCheckboxList[1].querySelectorAll('.checkbox');

checkboxs[1].classList.add('checkbox_checked');
checkboxs[2].classList.add('checkbox_checked');
checkboxs[3].classList.add('checkbox_checked');
