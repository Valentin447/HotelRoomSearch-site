let dropdownCounters = document.querySelectorAll('.dropdown__counter'); 

for(let counter of dropdownCounters){
    let buttonMinus = counter.querySelector('.dropdown__counter-button_minus');
    let buttonPlus = counter.querySelector('.dropdown__counter-button_plus');
    let inputValue = counter.querySelector('.dropdown__counter-value-number');
    let value = inputValue.value;

    inputValue.oninput = function(){
        if(inputValue.value >= 0 && inputValue.value <= 999){
            value = inputValue.value;
        }
        CheckValue();
    }

    buttonMinus.onclick = function(){
        if(value > 0){
            value--;
            inputValue.value = value;
        }
        CheckValue();
    };
    buttonPlus.onclick = function(){
        if(value < 999){
            value++;
            inputValue.value = value;
        }
        CheckValue();
    };
    
    let CheckValue = function(){
        if(value == 0){
            buttonMinus.classList.add('dropdown__counter-button_not-activ');
        } else {
            buttonMinus.classList.remove('dropdown__counter-button_not-activ');
        }
        if(value == 999){
            buttonPlus.classList.add('dropdown__counter-button_not-activ');
        } else {
            buttonPlus.classList.remove('dropdown__counter-button_not-activ');
        }
    };
    CheckValue();
}


