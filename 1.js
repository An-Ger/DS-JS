//rectangles = [[2,3],[3,7],[4,3],[3,7]]
var countGoodRectangles = function(rectangles) {
    let res = [];
    let map = new Map();
    let count = 0;
    rectangles.forEach(element => {
        res.push(element[0] > element[1] ? element[1] : element[0]);
    });
    let max = Math.max(...res);
    res.forEach(element => {
        if(element == max) count++;
    });
    return count;
};