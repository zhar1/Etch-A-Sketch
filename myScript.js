const container = document.createElement("div");
container.classList.add('container');
document.body.appendChild(container);

//creates n number of divs for grid layout
let numOfDivs = 16;
function createDivs(numOfDivs){
    let divArray = new Array();
    for (i = 0; i < numOfDivs; i++){
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('gridBox');
        divArray[i].textContent = i + 1;
        container.appendChild(divArray[i]);
    }
}
createDivs(numOfDivs);