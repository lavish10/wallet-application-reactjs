import RecentTransactionService from "./RecentTransactionService";
import axios from 'axios';
import React from "react";

jest.mock('axios');
describe('RecentTransactionServiceTest', function () {

    test('should get the name of user from backend', () => {
        const arrayOfTransactions = [{
            id: 1,
            type: "CREDIT",
            amount: 50,
            remarks: null,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        axios.get.mockResolvedValue({data:arrayOfTransactions});

        return RecentTransactionService.get(1234567890).then(data => expect(data).toEqual(arrayOfTransactions));
    });


});