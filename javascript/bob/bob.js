
var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (input.trim().length === 0) {
       return 'Fine. Be that way!'
    } else if ((input.match(/[a-z]/i)) && (input.toUpperCase() === input)) {
        return 'Whoa, chill out!'
    } else if (input.slice(-1) === "?") {
        return 'Sure.'
    } else {
        return 'Whatever.'
    }
};

module.exports = Bob;
