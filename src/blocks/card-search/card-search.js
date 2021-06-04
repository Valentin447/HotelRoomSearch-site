let cardSearches = document.querySelectorAll('.card-search');
for (let cardSearch of cardSearches) {
    let cardSearchArrows = cardSearch.querySelectorAll('.card-search-date .arrow');
    let datepicker = cardSearch.querySelector('.card-search__datepicker');
    for(let arrow of cardSearchArrows){
        arrow.onclick = function(){
            datepicker.classList.toggle('card-search__datepicker_hidden');
        }
    }
}