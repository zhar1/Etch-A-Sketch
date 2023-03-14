const container = document.createElement("div");
const button = document.createElement('button');
container.classList.add('container');
document.body.appendChild(button);
document.body.appendChild(container);
button.textContent = 'select number of boxes Squared';
const blackButton = document.getElementById('black');
const rgbButton = document.getElementById('rgb');

//array to store n number of grids
const divArray = new Array();
let black = false;
let rbg = false;
blackButton.onclick = function(){
    black = true;
    rbg = false;
}
rgbButton.onclick = function(){
    rbg = true; 
    black = false;
}
// creates column_squared number of divs i.e. column * column
function createGrid(numOfColumns){
    let numOfDivs = (numOfColumns * numOfColumns);
    for (i = 0; i < numOfDivs; i++){
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('gridBox');
        divArray[i].id = i + 1;
        divArray[i].addEventListener('mouseover', changeBackground);
        container.appendChild(divArray[i]);
    }
}

button.onclick = function(){
    //check for existing grid
    if(divArray[0]){
        removeGrid();
    }
    //prompt for number of columns
    let newNumOfColumns = prompUser();
    //variable to store additions to class 'container'
    const gridSquares = document.querySelector('.container')
    //set grid-template-columns to 'repeat(newNumberOfColumns, 60px)
    gridSquares.style.gridTemplateColumns = `repeat(${newNumOfColumns}, 1fr)`;
    gridSquares.style.gridTemplateRows = `repeat(${newNumOfColumns}, 1fr)`
    //creates newNumOfColumns x newNumOfColumns grid
    createGrid(newNumOfColumns);
}


function removeGrid(){
    divArray.forEach(div => div.remove());
}
function changeBackground(e){
    if(black){
        this.style.backgroundColor ='black';
    } else if(rbg){
        this.style.backgroundColor = getRandomRgb();
    } else {
        this.style.backgroundColor = 'pink';
    }
}
function getRandomRgb(){
    let rgb = Math.floor(Math.random()*16777215).toString(16);
    return '#' + rgb;
}
// promts for number of columns in grid
function prompUser(){
    let columns;
    do {
        columns = Number(prompt('Enter number of tiles'));
        if(columns > 100) {
            alert('Max input: 100');
        }
    } while (columns > 100);
    return columns;
}