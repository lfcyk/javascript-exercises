const removeFromArray = function(array) {
    let result = array;
    const args = Array.from(arguments);
    
    args.splice(0,1);
    args.forEach(element => {
        let n = result.length
        for(i=0;i<n;i++){
            if(result[i]===element){
                result.splice(i,1);
            }
        }
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
