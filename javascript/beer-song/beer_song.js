'use strict';

var Beer = {
    verse: function (number) {
        if (number === 2) {
            return number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\n'
                + 'Take one down and pass it around, 1 bottle of beer on the wall.\n';
        } else if (number === 1) {
            return number + ' bottle of beer on the wall, ' + number + ' bottle of beer.\n'
                + 'Take it down and pass it around, no more bottles of beer on the wall.\n';
        } else if(number === 0) {
            return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
        } else {
            return number + ' bottles of beer on the wall, ' + number + ' bottles of beer.\n'
                + 'Take one down and pass it around, ' + (parseInt(number)-1) + ' bottles of beer on the wall.\n';
        }
    },

    sing: function (start, end) {
        var result = [];
        end = end || 0;
        for (var i = start; i >= end; i--) {
            result.push(this.verse(i));
        }
        return result.join('\n');
    }
};
console.log(Beer.sing(0));
module.exports = Beer;
