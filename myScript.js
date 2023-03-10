const container = document.createElement("div");
const button = document.createElement('button');
container.classList.add('container');
document.body.appendChild(button);
document.body.appendChild(container);
button.textContent = 'select number of boxes';

//array to store n number of grids
let divArray = new Array();

// creates column_squared number of divs i.e. column * column
function createGrid(numOfColumns){
    let numOfDivs = (numOfColumns * numOfColumns);
    for (i = 0; i < numOfDivs; i++){
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('gridBox');
        divArray[i].id = i + 1;
        divArray[i].addEventListener('mouseover', addBackgroundColor);
        container.appendChild(divArray[i]);
    }
}

function addBackgroundColor(e){
    this.style.backgroundColor = 'black';
    console.log(this);
}
//const divs = document.querySelectorAll('.gridbox')
//divs.forEach(div => div.addEventListener('click', addBackgroundColor));

button.onclick = function(){
    //prompt for number of columns
    let newNumOfColumns = Number(prompt('Enter number of tiles'));
    //variable to store additions to class 'container'
    const gridSquares = document.querySelector('.container')
    //set grid-template-columns to 'repeat(newNumberOfColumns, 60px)
    gridSquares.style.gridTemplateColumns = `repeat(${newNumOfColumns}, 60px)`;
    //creatws newNumOfColumns x newNumOfColumns grid
    createGrid(newNumOfColumns);
}


/* next we need to add grid attributes by js (number of cololumns) */