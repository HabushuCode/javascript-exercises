const findTheOldest = function(peeps) {
    return peeps.reduce((oldest,nextPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(nextPerson.yearOfBirth,nextPerson.yearOfDeath);

        return oldestAge < currentAge ? nextPerson : oldest;
    })
};

let getAge = function(birth,death) {
    if (!death) {
        death = new Date().getFullYear()
    };
    return death -birth;
}

// Do not edit below this line
module.exports = findTheOldest;
