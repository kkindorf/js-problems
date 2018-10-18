const sumAll = function(...args) {
    let first = args[0];
    let last = args[1];
    let sum = 0;
    if(typeof first !== "number" || typeof last !== "number") {
        return "ERROR";
    }

    if(first > last) {
        for(var i = last; i <= first; i++) {
            sum += i;
        }
        
    }
    else {
        for(var i = first; i <= last; i++) {
            sum += i;
        }
        
    }
    if(sum < 0) {
        return "ERROR";
    }
    return sum;
    
}

module.exports = sumAll
