var words = function(word){
    var removeReturn = word.replace(/\n/g, " ");
    var removeTab = removeReturn.replace(/\t/g, " ");
    var wordArray = removeTab.split(' ');
    var noSpaces = wordArray.filter(function(word){
        return word !== '';
    });
    var wordTally = noSpaces.reduce(function(hash, word){
        if (hash.hasOwnProperty(word)) {
            hash[word]++;
        } else {
            hash[word] = 1;
        }
        return hash;
    }, {});
    return wordTally;
};
module.exports = words;
