let dropdowns = document.querySelectorAll('.dropdown');
for(let dropdown of dropdowns){
    let dropdownToggle = dropdown.querySelector('.dropdown__toggle');
    dropdownToggle.onclick = function(){
        dropdown.classList.toggle('dropdown_open');
    }
}

import './__counter/dropdown__counter';