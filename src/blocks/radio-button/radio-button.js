let radioButton = document.querySelectorAll('.radio-button');

for(let radioBut of radioButton){
    radioBut.onclick = function(){
        let radioButtons = document.querySelectorAll('.radio-button');
        for(let radioBut of radioButtons){
            let isChecked = radioBut.querySelector('input[type=radio]:checked');
            if(isChecked){
                radioBut.classList.add('radio-button_checked');
            } else {
                radioBut.classList.remove('radio-button_checked');
            }
        }
    }

    let radioButtonCircle = radioBut.querySelector('.radio-button-circle');
    let radioButtonLabel = radioBut.querySelector('.radio-button-label');
    radioButtonCircle.onclick = function(){
        radioButtonLabel.click();
    }
}





