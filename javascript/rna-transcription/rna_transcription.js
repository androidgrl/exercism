var dnaKey = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A'
};

var toRna = function (dna) {
    var letters = dna.split('');
    var transcribed = letters.map(function(letter){
        return dnaKey[letter];
    });
    return transcribed.join('');
};

module.exports = toRna;
