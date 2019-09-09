import React from "react";
import {shallow} from "enzyme";
import RecentTransactionService from "../../service/RecentTransactionService";
import RecentTransactions from "./RecentTransactions";
import RecentTransactionsView from "./RecentTransactions.view";

jest.mock('axios');
jest.mock('../../service/RecentTransactionService');
describe('RecentTransactionTest', function () {
    it('should be able to send get request for recent transactions ', async () => {
        const arrayOfTransactions = [{
            id: 1,
            type: "CREDIT",
            amount: 50,
            remarks: null,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        RecentTransactionService.get.mockResolvedValue(arrayOfTransactions);
        const recentTransaction = shallow(<RecentTransactions transactions={arrayOfTransactions} id={1}/>);

        expect(recentTransaction.find(RecentTransactionsView)).toHaveLength(1);
        expect(recentTransaction.find(RecentTransactionsView).props()['transactions'][0]['type']).toEqual("CREDIT");
        expect(recentTransaction.find(RecentTransactionsView).props()['transactions'][0]['amount']).toEqual(50);
        expect(recentTransaction.find(RecentTransactionsView).props()['transactions'][0]['createdAt']).toEqual("2019-09-07T05:08:15.630+0000");
    });

    it('should be able to display no transactions if no transaction happen', function () {
        const app = shallow(<RecentTransactions transactions={[]}/>);
        expect(app.find('label').text()).toEqual('No recent transactions');
    });

    it('should be able to render recent transactions view if there is a transaction happen', function () {
        const arrayOfTransactions = [{
            id: 1,
            type: "CREDIT",
            amount: 50,
            remarks: null,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactions transactions={arrayOfTransactions}/>);
        expect(app.find('RecentTransactionsView')).toHaveLength(1);
    });
});