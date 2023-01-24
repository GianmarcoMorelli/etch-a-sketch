const mainContainer = document.querySelector(".container");
const theButton = document.querySelector("button");
let gridDimension;
let newDivDimension;
let i = 0;

theButton.addEventListener("click", funcPrompt);

function funcPrompt(){
    gridDimension = parseInt(prompt("Please enter the desired dimension of the grid (max 100 x 100)","16"));
    mainContainer.innerHTML = "";
    if(gridDimension <= 100){
        for(i = 0; i < gridDimension*gridDimension; i++){
            mainContainer.innerHTML += "<div class=\"myGrid\">Prova</div>";
        }
        newDivDimension = 100 / gridDimension;
        console.log(newDivDimension);
        const mySingDiv = document.querySelectorAll(".myGrid");
        mySingDiv.forEach(element => {
            element.style.height = newDivDimension + "%";
            element.style.width = newDivDimension + "%";
        });
    }
}

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








