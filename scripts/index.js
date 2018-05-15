function printNumbers(firstNum, lastNum) {
    for (var i = firstNum; i <= lastNum; i++) {
        console.log(i);
    }
}
printNumbers(1, 10)

function printSquare(height) {
    var y = 0;
    while (y < height) {
        var x = 0;
        var row = "";
        y = y + 1;
        while (x < height){
            x = x + 1;
            row = row + " *";
        }
        console.log(row);
    }
}
printSquare(5)

function printBox(width, height) {
    var brick = ' *';
    var space = '  ';
    var y = 0;
    while (y < height) {
        var x = 0;
        var row1 = '';
        if ((y == 0) || (y == height - 1)) {
            while (x < width) {
                row1 = row1 + ' *';
                x = x + 1;
            }
        console.log(row1); //and last row
        } else {
            var row = '';
            while (x < width) {
                if ((x == 0) || (x == width - 1)) {
                    row = row + brick;
                } else {
                    row = row + space;
                }
                x = x + 1;
            }
        console.log(row);
        }
        y = y + 1;
    }
}
printBox(5, 6)
