import './style.css'
import homework4 from '../HW4';
function randomColor() {
    let r = Math.round(Math.random() * 256);
    let g = Math.round(Math.random() * 256);
    let b = Math.round(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}




let container = document.querySelector('.container');
function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        let square = document.createElement('div');
        square.className ='square';
        square.style.width='50px';
        square.style.height='50px';
        square.style.background = randomColor();
        container.append(square);
    }
}




function generateBlocksInterval() {
    generateBlocks()
    function deleteBlocks() {
        container.innerHTML = '';
        generateBlocks()
    }
    setInterval(()=> {
        deleteBlocks();
    },1000)
}




const homework9 = generateBlocksInterval();
export default homework9;