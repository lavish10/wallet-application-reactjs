import Wallet from "./Wallet";
import React from "react";
import {shallow} from "enzyme";
import WalletModel from "./Wallet.model";
import Header from "../Header";
import RecentTransactionService from "../../service/RecentTransactionService";
import axios from "axios";

jest.mock('axios');
jest.mock('./Wallet.model');
jest.mock('../../service/RecentTransactionService');
describe('Wallet', function () {
    it('should display header with the wallet', async function () {
        WalletModel.get.mockResolvedValue({data: {id: 1, amount: 50}});
        const arrayOfTransactions = [{
            id: 1,
            type: "CREDIT",
            amount: 50,
            remarks: null,
            createdAt: "2019-09-07T05:08:15.630+0000"
        }];
        RecentTransactionService.get.mockResolvedValue(arrayOfTransactions);
        const wallet = shallow(<Wallet id={1}/>);

        let header = wallet.find(Header);
        await Promise.resolve();
        expect(header).toHaveLength(1);
    });
});