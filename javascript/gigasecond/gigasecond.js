function Gigasecond(start) {
    this.date = function () {
        var startDate = new Date(start);
        var startSeconds = startDate.getSeconds();
        var endSeconds = startDate.setSeconds(startSeconds + Math.pow(10,9));
        var resultWithSeconds = new Date(endSeconds);
        var result = new Date(resultWithSeconds);
        result.setHours(0);
        result.setMinutes(0);
        result.setSeconds(0);
        return result;
    };
}

module.exports = Gigasecond;
