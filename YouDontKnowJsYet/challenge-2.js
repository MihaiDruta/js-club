function range(start,end) {
    var innerRange = function (start, end) {
        if (end < start) {
            return [];
        }

        let result = [];
        for ( let i = start; i <= end; i++ ) {
            result.push(i);
        }
        return result;
    };
    if (end === undefined) {
        return function (innerEnd) {
            return innerRange(start, innerEnd);
        }
    }
    return innerRange(start, end);
}

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6); 