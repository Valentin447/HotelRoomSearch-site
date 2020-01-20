let toggles = document.querySelectorAll('.toggle');

for(let toggle of toggles){
    toggle.onclick = function(){
        let togg = document.querySelectorAll('.toggle');
        for(let tog of togg){
            let toggleOn = tog.querySelector('input[type=checkbox]:checked');
            if(toggleOn){
                tog.classList.add('toggle__switch_on');
            } else {
                tog.classList.remove('toggle__switch_on');
            }
        }
    }
}


