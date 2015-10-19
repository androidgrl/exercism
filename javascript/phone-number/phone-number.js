"use strict";

function PhoneNumber(number) {
    this.number = function () {
        var justNumbers = number.replace(/\D/g,'');
        if (justNumbers.length === 10) {
            return justNumbers;
        } else if (justNumbers.length === 11 && justNumbers[0] === '1') {
            return justNumbers.substr(1);
        } else {
            return '0000000000';
        }
    };

    this.areaCode = function () {
       return this.number().substr(0, 3);
    };

    this.toString = function () {
        var nakedNumber = this.number();
        return '(' + nakedNumber.substr(0, 3) + ') ' + nakedNumber.substr(3, 3) +
            '-' + nakedNumber.substr(6);
    }
}
module.exports = PhoneNumber;
