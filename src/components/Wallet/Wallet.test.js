import Wallet from "./Wallet";
import React from "react";
import WalletView from "./Wallet.view";
import {shallow} from "enzyme";
import WalletModel from "./Wallet.model";

jest.mock('axios');
jest.mock('./Wallet.model');
describe('Wallet', function () {
    it('should display wallet view', function () {
        const wallet = shallow(<Wallet id={'1289230213'}/>);

        expect(wallet.find(WalletView)).toHaveLength(1);
    });
    it('should display wallet simulate', async function () {
        WalletModel.get.mockResolvedValue({amount: 50});
        const wallet = shallow(<Wallet id={'1289230213'}/>);

        let view = wallet.find(WalletView);
        view.simulate('addMoney');
        await Promise.resolve();

        expect(view).toHaveLength(1);
    });
});