const array = [];
let object = {};
let average = 0;
let minNum = 0;
let maxNum = 0;
let errorFlag = 0;

function onlyNumbers(array) {
    array.forEach(element => {
        if(typeof element !== 'number') {
            errorFlag = 1;
        }
    });

    if(!errorFlag) {
        averageResult(array);
        minMaxResult(array);
        createObject(array);
        return object;
        
    } else {
        return false;
    }
}

function averageResult(array) {
    let sum = array.reduce((a, b) => {
        return a + b;
    });
    average = (sum/(array.length));
}

function minMaxResult(array) {
    array.sort((a, b) => {
        return b - a;
    });
    minNum = array[(array.length) - 1];
    maxNum = array[0];
}

function createObject(array) {
    object.average = Math.round(average);
    object.min = minNum;
    object.max = maxNum;
    object.length = array.length;
}

module.exports = onlyNumbers;