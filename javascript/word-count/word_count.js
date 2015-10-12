var words = function(word){
    var removeReturn = word.replace("\n", " ");
    var removeTab = removeReturn.replace("\t", " ");
    var wordArray = removeTab.split(' ');
    var wordTally = wordArray.reduce(function(hash, word){
        if (hash[word]) {
            hash[word] += 1;
        } else {
            hash[word] = 1;
        }
        return hash;
    }, {});
    return wordTally;
};
module.exports = words;
