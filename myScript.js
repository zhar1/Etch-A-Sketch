const container = document.createElement("div");
container.classList.add('container');
document.body.appendChild(container);

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