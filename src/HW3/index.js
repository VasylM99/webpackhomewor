

const randomArray = function getRandomArray(length, min, max) {
    let array = [];
    
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor((min + Math.random()*(max+1-min)));
        array[i]= randomNumber;      
    }
    return array;
}
const homework3 = randomArray(15,1,100); 
export default homework3;