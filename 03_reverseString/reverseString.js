const reverseString = function(string) {
    let reversedString = "";
    let n = string.length;
    for(i=0;i<n;i++){
        reversedString += string[n-1-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
