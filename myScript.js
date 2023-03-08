const container = document.createElement("div");
const button = document.createElement('button');
container.classList.add('container');
document.body.appendChild(button);
document.body.appendChild(container);
button.textContent = 'select number of boxes'
//creates n number of divs for grid layout
let numOfDivs = 256;
let divArray = new Array();
function createDivs(numOfDivs){
    for (i = 0; i < numOfDivs; i++){
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('gridBox');
        divArray[i].id = i + 1;
        container.appendChild(divArray[i]);
    }
}
createDivs(numOfDivs);
function addBackgroundColor(e){
    this.style.backgroundColor = 'black';
}
divArray.forEach(div => div.addEventListener('mouseover', addBackgroundColor));

button.addEventListener('click', addBoxes);
function addBoxes(){
    console.log('yay');
}