const mainContainer = document.querySelector('.container');
let i = 0;
for(i = 0; i < 16*16; i++){
    mainContainer.innerHTML += "<div class=\"myGrid\">Prova</div>";
}

document.getElementsByClassName("myGrid").style.background="#00ff00";