import Transactions from "./Transactions";
import React from "react";
import {shallow} from "enzyme";
import WalletModel from "../Wallet/Wallet.model";

jest.mock('../Wallet/Wallet.model.js');
describe('TransactionsTest', function () {
    it('should be able to display the date filter in the transactions', async function () {
        const returnedValue = {
            id: 1,
            name: "someName",
            balance: 50,
            phoneNumber: 1234567890
        };
        WalletModel.get.mockResolvedValue(returnedValue);
        const transactions = shallow(<Transactions walletId={1}/>);
        expect(transactions.find('DateFilter')).toHaveLength(1);
    });

    it('should be able to load the wallet details from the backend', async function () {
        const returnedValue = {
            id: 1,
            name: "someName",
            balance: 50,
            phoneNumber: 1234567890
        };
        WalletModel.get.mockResolvedValue({data: returnedValue});
        const transactions = shallow(<Transactions walletId={1}/>);
        await Promise.resolve();
        expect(transactions.state().id).toEqual(1);
    });
});