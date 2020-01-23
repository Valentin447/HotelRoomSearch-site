let likeButtons = document.querySelectorAll('.like-button');
for(let likeButton of likeButtons){
    let favorite = likeButton.querySelector('.like-button-favorite');
    let counter = likeButton.querySelector('.like-button__counter');
    let counterValue = counter.innerHTML;
    let inputChecked = likeButton.querySelector('.like-button-input:checked');
    if(inputChecked){
        likeButton.classList.add('like-button_mark');
        counter.innerHTML = ++counterValue;
        favorite.innerHTML = 'favorite';
        
    } else {
        likeButton.classList.remove('like-button_mark');
        favorite.innerHTML = 'favorite_border';
    }

    likeButton.onclick = function(){
        let input2 = likeButton.querySelector('.like-button-input');
        let favorite2 = likeButton.querySelector('.like-button-favorite');
        let counter2 = likeButton.querySelector('.like-button__counter');
        let counterValue2 = counter2.innerHTML;
        input2.click();
        let inputChecked2 = likeButton.querySelector('.like-button-input:checked');
        if(inputChecked2){
            likeButton.classList.add('like-button_mark');
            counter2.innerHTML = ++counterValue2;
            favorite2.innerHTML = 'favorite';
            
        } else {
            likeButton.classList.remove('like-button_mark');
            favorite2.innerHTML = 'favorite_border';
            counter2.innerHTML = --counterValue2;
        }
    }
}