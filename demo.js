
upRight = ['1 4', '2 3', '4 1']


function countMax(upRight) {

    var nRows = 0;
    for (let i = 0; i < upRight.length; i++) {
        if (parseInt(upRight[i][0]) > nRows) {
            nRows = upRight[i][0]
        }
    }
    var nCols = 0;
    for (let i = 0; i < upRight.length; i++) {
        if (parseInt(upRight[i][2]) > nCols) {
            nCols = upRight[i][2]
        }
    }

     let tempRow = []
     let biggestNumbers = []
     for (let i = 0; i < upRight.length; i++) {
        for (let j = 0; j < upRight[i].length; j++) {
            tempRow[i] = tempRow[i] +1
        }
     }

     return tempRow;
    
    
}


console.log(countMax(upRight));


// console.log(1 == '1')