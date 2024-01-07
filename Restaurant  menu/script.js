


//to show the ingrideins of the iteam
const card = document.querySelectorAll('.cardwrapper');
const arrow = document.querySelectorAll('.change-arrow');
const nav = document.querySelector('.nav');



card.forEach(card => {
    card.addEventListener("click", () => {
        let cardAvtive = document.querySelector('.larger');
        console.log(cardAvtive);
        if (cardAvtive) {
            card.classList.toggle('larger');
            cardAvtive.classList.remove('larger');
        } else{
            card.classList.toggle('larger');
        }

    } )
})

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 180){
        console.log('yes');
        nav.classList.add('change');
    } else{
        nav.classList.remove('change');
    }

})


