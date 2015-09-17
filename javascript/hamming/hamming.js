module.exports = function(letter1, letter2) {
    if (letter1.length !== letter2.length) {
        throw "DNA strands must be of equal length.";
    }
    var count = 0;
    for (var i = 0; i < letter1.length; i++) {
        if (letter1[i] !== letter2[i]) {
            count++;
        }
    }
    return count;
}
