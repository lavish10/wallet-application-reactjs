import RecentTransactionsView from "./RecentTransactions.view";
import React from "react";
import {shallow} from "enzyme";
import BootstrapTable from 'react-bootstrap-table-next';

describe('RecentTransactionViewTest', function () {
    it('should be able to render the table if there is a row', function () {
        const transactions = [{
            id: 1,
            remarks: null,
            type: "CREDIT",
            amount: 50,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactionsView transactions={transactions}/>);

        expect(app.find(BootstrapTable)).toHaveLength(1);
    });

    it('should be able to render the table for credit', function () {
        const transactions = [{
            id: 1,
            remarks: null,
            type: "CREDIT",
            amount: 50,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactionsView transactions={transactions}/>);
        const dataTable = app.find(BootstrapTable);
        dataTable.render();
        expect(dataTable.props().keyField).toEqual('id');
    });

    it('should be able to render the table for debit', function () {
        const transactions = [{
            id: 1,
            remarks: null,
            type: "DEBIT",
            amount: 50,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactionsView transactions={transactions}/>);
        const dataTable = app.find(BootstrapTable);
        dataTable.render();
        expect(dataTable.props().keyField).toEqual('id');
    });


});