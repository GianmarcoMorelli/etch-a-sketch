const mainContainer = document.querySelector('.container');
let i = 0;

for(i = 0; i < 16*16; i++){
    mainContainer.innerHTML += "<div class=\"myGrid\">Prova</div>";
}

const myDiv = document.querySelectorAll('.myGrid');
myDiv.forEach(element => {
    element.addEventListener("mouseover", () => {              
        element.classList.add('red');
    });
    element.addEventListener("mouseout", () => {              
        element.classList.remove('red');
    });;
});








