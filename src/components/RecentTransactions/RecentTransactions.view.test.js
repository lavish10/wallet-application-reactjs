import RecentTransactionsView from "./RecentTransactions.view";
import React from "react";
import {shallow} from "enzyme";
import {MDBDataTable} from "mdbreact";

describe('RecentTransactionViewTest', function () {
    it('should be able to render the table if there is a row', function () {
        const transactions = [{
            remarks: null,
            type: "CREDIT",
            amount: 50,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactionsView rows={transactions}/>);

        expect(app.find(MDBDataTable)).toHaveLength(1);
    });

    it('should be able to render the table without border', function () {
        const transactions = [{
            remarks: null,
            type: "CREDIT",
            amount: 50,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactionsView rows={transactions}/>);
        const mdbTable = app.find(MDBDataTable);
        mdbTable.render();
        expect(mdbTable.props().bordered).toEqual(false);
    });

    it('should be able to render the table without border', function () {
        const transactions = [{
            remarks: null,
            type: "CREDIT",
            amount: 50,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        const app = shallow(<RecentTransactionsView rows={transactions}/>);
        const mdbTable = app.find(MDBDataTable);
        expect(mdbTable.props().bordered).toEqual(false);
    });


});