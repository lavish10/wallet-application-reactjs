import axios from 'axios';
import React from "react";
import AddMoneyService from "./AddMoneyService";

jest.mock('axios');
describe('AddMoneyServiceTest', function () {

    test('should get the name of user from backend', () => {
        const arrayOfTransactions = {
            "id": 12,
            "type": "CREDIT",
            "amount": 100.0,
            "remarks": null,
            "wallet": {
                "id": 1,
                "phoneNumber": "1234567890",
                "name": "lavish",
                "balance": 100.0
            },
            "createdAt": "2019-09-09T10:22:48.271+0000",
            "receiverPhoneNumber": null
        };
        axios.post.mockResolvedValue({data: arrayOfTransactions});

        return AddMoneyService.post(1, {
            "amount": 100,
            "type": "CREDIT"
        }).then(data => expect(data).toEqual(arrayOfTransactions));
    });
});