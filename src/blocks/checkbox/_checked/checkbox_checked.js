let checkboxs = document.querySelectorAll('.checkbox');

for(let checkbox of checkboxs){
    let button = checkbox.querySelector('.checkbox__button-paint');
    button.onclick = function(){
        checkbox.classList.toggle('checkbox_checked');
    }

}