import React from "react";
import {shallow} from "enzyme";
import RecentTransactionService from "../../service/RecentTransactionService";
import RecentTransactions from "./RecentTransactions";

jest.mock('axios');
jest.mock('../../service/RecentTransactionService');
describe('RecentTransactionTest', function () {
    it('should ', async () => {
        const arrayOfTransactions = [{
            id: 1,
            type: "CREDIT",
            amount: 50,
            remarks: null,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        RecentTransactionService.get.mockResolvedValue(arrayOfTransactions);
        const recentTransaction = shallow(<RecentTransactions id={1234567890}/>);
        await Promise.resolve();

        expect(RecentTransactionService.get).toHaveBeenCalledTimes(1);
    });
});