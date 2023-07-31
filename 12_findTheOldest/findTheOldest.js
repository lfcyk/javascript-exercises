const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        console.log(oldest.name, currentPerson.name);
        return oldestAge < currentPersonAge? currentPerson : oldest;
    })

};

function getAge(a,b) {
    if(!a) {
        a = new Date().getFullYear();
    }
    return a-b;
}
// Do not edit below this line
module.exports = findTheOldest;
