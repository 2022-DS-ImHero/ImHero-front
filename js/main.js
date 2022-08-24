//배너//

const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; 

inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`;
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; 

const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

buttonLeft.addEventListener('click', () => {
currentIndex--;
currentIndex = currentIndex < 0 ? 0 : currentIndex; 

innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; 
clearInterval(interval); 
interval = getInterval(); 
});

buttonRight.addEventListener('click', () => {
currentIndex++;
currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; 
innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; 
clearInterval(interval); 
interval = getInterval();
});


const getInterval = () => {
return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
}, 2000);
}

let interval = getInterval(); 

//nav바//

function shownav(){
    document.querySelector('.navbar').style.display = 'inline'
}


function hidenav(){
    document.querySelector('.navbar').style.display = 'none'
}

