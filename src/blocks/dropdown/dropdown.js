let dropdowns = document.querySelectorAll('.dropdown');
for (let dropdown of dropdowns) {
    let dropdownToggle = dropdown.querySelector('.dropdown__toggle');
    let buttonClean = dropdown.querySelector('.dropdown__button-clean-input');
    dropdownToggle.onclick = function () {
        dropdown.classList.toggle('dropdown_open');
    }
    buttonClean.onclick = function () {
        let counterValues = dropdown.querySelectorAll('.dropdown__counter-value-number');
        for (let counterValue of counterValues) {
            counterValue.setAttribute('value', 0);
            counterValue.value = 0;
        }
        CheckValue(true);
    }
}

let dropdownCounters = document.querySelectorAll('.dropdown__counter');

for (let counter of dropdownCounters) {
    let buttonMinus = counter.querySelector('.dropdown__counter-button_minus');
    let buttonPlus = counter.querySelector('.dropdown__counter-button_plus');
    let inputValue = counter.querySelector('.dropdown__counter-value-number');
    let value = inputValue.getAttribute('value');
    inputValue.value = value;

    inputValue.oninput = function () {
        if (inputValue.value >= 0 && inputValue.value <= 999) {
            value = inputValue.value;
            inputValue.setAttribute('value', value);
        }
        rewriteTextDropdownRooms();
        CheckValue(false);
    }

    buttonMinus.onclick = function () {
        if (value > 0) {
            value--;
            inputValue.value = value;
            inputValue.setAttribute('value', value);
        }
        rewriteTextDropdownRooms();
        CheckValue(false);
        allGuests(false);
    };
    buttonPlus.onclick = function () {
        if (value < 999) {
            value++;
            inputValue.value = value;
            inputValue.setAttribute('value', value);
        }
        rewriteTextDropdownRooms();
        CheckValue(false);
        allGuests(false);
    };
    CheckValue(false);
}

function CheckValue(clean) {
    let dropdownCounters = document.querySelectorAll('.dropdown__counter');
    for (let counter of dropdownCounters) {
        let buttonMinus = counter.querySelector('.dropdown__counter-button_minus');
        let buttonPlus = counter.querySelector('.dropdown__counter-button_plus');
        let inputValue = counter.querySelector('.dropdown__counter-value-number');
        let value = inputValue.value;


        if (value == 0) {
            buttonMinus.classList.add('dropdown__counter-button_not-activ');
        } else {
            buttonMinus.classList.remove('dropdown__counter-button_not-activ');
        }
        if (value == 999) {
            buttonPlus.classList.add('dropdown__counter-button_not-activ');
        } else {
            buttonPlus.classList.remove('dropdown__counter-button_not-activ');
        }
    }
    allGuests(clean);
};

function allGuests(clean) {
    let dropdownsGuests = document.querySelectorAll('.dropdown_guests');
    let quantityAllGuests = 0;
    for (let dropdownGuests of dropdownsGuests) {
        let dropdownButtonClean = dropdownGuests.querySelector('.dropdown__button-clean-input');
        let dropdownToggleText = dropdownGuests.querySelector('.dropdown__toggle-text');
        let countersGuests = dropdownGuests.querySelectorAll('.dropdown__counter-value-number');
        if (clean) {
            for (let counterGuests of countersGuests) {
                counterGuests.setAttribute('value', 0);
                counterGuests.value = 0;
            }
        } else {
            for (let counterGuests of countersGuests) {
                quantityAllGuests += +counterGuests.getAttribute('value');
            }
        }
        dropdownToggleText.innerHTML = quantityAllGuests;
        if (quantityAllGuests > 0) {
            dropdownButtonClean.classList.remove('dropdown__button-clean_hidden');
            dropdownToggleText.innerHTML = quantityAllGuests + ' ' + createLine(quantityAllGuests);
        } else {
            dropdownButtonClean.classList.add('dropdown__button-clean_hidden');
            dropdownToggleText.innerHTML = 'Сколько гостей';
        }
        quantityAllGuests = 0;
    }
}

function createLine(quantityAllGuests) {
    if (quantityAllGuests === 1) {
        return 'гость';
    } else if (quantityAllGuests > 1 && quantityAllGuests < 5) {
        return 'гостя';
    } else if (quantityAllGuests >= 5) {
        return 'гостей';
    }
}

function rewriteTextDropdownRooms() {
    let dropdownsRooms = document.querySelectorAll('.dropdown_rooms');
    for (let dropdownRooms of dropdownsRooms) {
        
        let toggleText = dropdownRooms.querySelector('.dropdown__toggle-text');
        let counters = dropdownRooms.querySelectorAll('.dropdown__counter');
        let quantityBedrooms = 0;
        let quantityBeds = 0;
        let quantityBathroom = 0;
        for (let i = 0; i < 3; i++) {
            quantityBedrooms = counters[0].querySelector('.dropdown__counter-value-number').getAttribute('value');
            quantityBeds = counters[1].querySelector('.dropdown__counter-value-number').getAttribute('value');
            quantityBathroom = counters[2].querySelector('.dropdown__counter-value-number').getAttribute('value');
        }
        let quantityBedroomsString = '0 спален';
        let quantityBedsString = '';
        let quantityBathroomString = '';
        if (quantityBedrooms == 1) {
            quantityBedroomsString = '1 спальня';
        } else if (quantityBedrooms > 1 && quantityBedrooms <= 4) {
            quantityBedroomsString = quantityBedrooms + ' спальни';
        } else if(quantityBedrooms > 4){
            quantityBedroomsString = quantityBedrooms + ' спален';
        } 

        if (quantityBathroom == 1) {
            quantityBathroomString = ', 1 ванна';
        } else if (quantityBathroom > 1 && quantityBathroom <= 4) {
            quantityBathroomString = ', ' + quantityBathroom + ' ванны';
        } else if(quantityBathroom > 4){
            quantityBathroomString = ', ' + quantityBathroom + ' ванн';
        } else if(quantityBathroom == 0){
            quantityBathroomString = '...';
        }

        if (quantityBeds == 1) {
            quantityBedsString = ', 1 кровать';
        } else if (quantityBeds > 1 && quantityBeds <= 4) {
            quantityBedsString = ', ' + quantityBeds + ' кровати';
        } else if(quantityBeds > 4 || quantityBeds == 0){
            quantityBedsString = ', ' + quantityBeds + ' кроватей';
        }
        
        toggleText.innerHTML = quantityBedroomsString + quantityBedsString + quantityBathroomString;
    }
}