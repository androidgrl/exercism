var anagram = function (word) {
    return {
        matches: matches.bind(this),
    };

    function matches() {
        var array = [];
        for (var i = 0; i < arguments.length; i++) {
            array.push(arguments[i]);
        }
        var flattenedArray = [].concat.apply([], array);
        var nonDuplicateArray = flattenedArray.filter(function(element){
            return element.toLowerCase() !== word.toLowerCase();
        });
        var result = nonDuplicateArray.filter(function(element){
            return element.toLowerCase().split('').sort().join() ===  word.toLowerCase().split('').sort().join();
        });
        return result;
    }
};
module.exports = anagram;
