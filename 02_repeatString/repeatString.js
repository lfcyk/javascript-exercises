const repeatString = function(string, repeatNum) {
    let returnString = "";
    if(repeatNum<0) return 'ERROR'
    for(let i=0;i < repeatNum; i++){
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
