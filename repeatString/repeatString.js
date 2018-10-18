const repeatString = function(str, num) {
    let repeatedStr = "";
    if(num > 0) {
        for(var i = 0; i < num; i++) {
            repeatedStr += str;
        }
        return repeatedStr;
    }
    else if(num < 0) {
        return "ERROR";
    }
    //if num == 0
    return "";
}

module.exports = repeatString
