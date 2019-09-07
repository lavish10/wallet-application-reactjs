export default class Validators {

    static checkValidPhoneNumber = (phoneNumber) => {
        const pattern = /^\d{10}$/;
        if (!pattern.test(phoneNumber)) {
            return "Invalid Phone Number";
        }
        return '';
    };

    static checkValidAmount = (amountInput) => {
        let amount = parseInt(amountInput);
        if (isNaN(amount)) {
            return "Amount should be a number"
        } else if (amount < 50) {
            return "Minimum amount that can be sent is 50";
        } else if (parseInt(amount) > 50000) {
            return "Maximum amount that can be sent is 50000";
        } else if (parseFloat(amount) % 50 !== 0) {
            return "Amount should a multiple of 50";
        } else {
            return "";
        }
    };

    static checkValidRemarks = (remarks) => {
        if (remarks.length > 100) {
            return "Maximum size of remarks can be 100"
        }
        return '';
    };
}