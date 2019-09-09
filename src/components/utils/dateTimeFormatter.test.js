import dateTimeFormatter from "./dateTimeFormatter";

describe('dateTimeFormatterTest', function () {
    it('should be able to utc into local time', function () {
        expect(dateTimeFormatter("2019-09-07T05:08:15.630+0000")).toEqual("7 Sep 2019 10:38:15 AM");
    });
});