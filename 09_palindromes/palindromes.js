const palindromes = function (str) {
    let cleanStr = str
                    .toLowerCase()
                    .match(/[a-z0-9]/g);
    return cleanStr.join("") === cleanStr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
