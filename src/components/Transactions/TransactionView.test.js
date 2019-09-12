import TransactionsView from "./TransactionView";
import {shallow} from "enzyme";
import React from "react";

describe('TransactionViewTest', function () {
    it('should be able to display transaction table', function () {
        const transactionData = [{
            id: 1,
            type: "CREDIT",
            amount: 50,
            remarks: '',
            createdAt: "2 Sep 2019 10:00:00"
        }];
        const transactionView = shallow(<TransactionsView transactions={transactionData}/>);
        expect(transactionView.find('BootstrapTableContainer')).toHaveLength(1);
    });
});