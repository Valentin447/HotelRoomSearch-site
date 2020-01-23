let rateButtons = document.querySelectorAll('.rate-button');
for(let rateButton of rateButtons){
    let stars = rateButton.querySelectorAll('.rate-button__star');
    for(let i = 0; i < 5; i++){
        stars[i].onclick = function(){  
            let starsNew = rateButton.querySelectorAll('.rate-button__star-icon');
            for(let j = 0; j < 5; j++){
                if(j < i + 1){
                    starsNew[j].innerHTML = 'star'
                } else {
                    starsNew[j].innerHTML = 'star_border'
                }
            }
        }
    }
}
