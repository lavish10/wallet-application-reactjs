import Validators from "./Validators";

describe('Validators', function () {
    it('should display error message when invalid phone number', function () {
        const result = Validators.checkValidPhoneNumber(123);

        expect(result).toEqual("Invalid Phone Number");
    });
    it('should not display error message for valid phone number', function () {
        const result = Validators.checkValidPhoneNumber(9876543210);

        expect(result).toEqual("");
    });
    it('should display error message for remarks of size greater than 100', function () {
        const result = Validators.checkValidRemarks("qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuioasdfghjklzxcvbnmqwertyuiop");

        expect(result).toEqual("Maximum size of remarks can be 100");
    });
    it('should not display error message for remarks of size less than 100', function () {
        const result = Validators.checkValidRemarks("abc");

        expect(result).toEqual("");
    });
    ////
    it('should display error message for invalid amount', function () {
        const result = Validators.checkValidAmount('asdf');

        expect(result).toEqual("Amount should be a number");
    });
    it('should display error message when denominations not multiple of 50', function () {
        const result = Validators.checkValidAmount(57);

        expect(result).toEqual("Amount should a multiple of 50");
    });
    it('should display error message when amount is less than 50', function () {
        const result = Validators.checkValidAmount(1);

        expect(result).toEqual("Minimum amount that can be sent is 50");
    });
    it('should display error message when amount greater than 50000', function () {
        const result = Validators.checkValidAmount(500001);

        expect(result).toEqual("Maximum amount that can be sent is 50000");
    });
    it('should not display error message when amount valid amount', function () {
        const result = Validators.checkValidAmount(100);

        expect(result).toEqual("");
    });
});