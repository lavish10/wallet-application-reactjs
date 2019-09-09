import axios from 'axios';
import React from "react";
import SendMoneyService from "./SendMoneyService";

jest.mock('axios');
describe('SendMoneyServiceTest', function () {

    test('should get the name of user from backend', () => {
        const response = {
            "id": 14,
            "type": "DEBIT",
            "amount": 25.0,
            "remarks": null,
            "wallet": {
                "id": 1,
                "phoneNumber": "1234567890",
                "name": "lavish",
                "balance": 75.0
            },
            "createdAt": "2019-09-09T10:25:05.299+0000",
            "receiverPhoneNumber": "0987654321"
        };
        axios.post.mockResolvedValue({data: response});

        return SendMoneyService.sendMoney(1, {
            "amount": 25,
            "type": "DEBIT",
            "receiverPhoneNumber": "0987654321"
        }).then(data => expect(data).toEqual(response));
    });
});