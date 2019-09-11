import WalletView from "./Wallet.view";
import {shallow} from "enzyme";
import React from "react";
import SendMoney from "../SendMoney/SendMoney";
import AddMoney from "../AddMoney/AddMoney";

describe('WalletView', function () {
    it('should have 2 button for adding and sending money', function () {
            const wallet = shallow(<WalletView/>);
            const buttons = wallet.find('button');

        expect(buttons).toHaveLength(2);
        });
        it('should display the Wallet balance', function () {
            const wallet = shallow(<WalletView balance={100}/>);
            const balance = wallet.find('h2');

            expect(balance).toHaveLength(1);
            expect(balance.text()).toEqual('Balance : ₹ 100');
        });
    it('should show the add money section on clicking add money button', function () {
            const wallet = shallow(<WalletView/>);
        const button = wallet.find('button#addMoneyBtn');

            button.simulate('click');

        expect(wallet.find(AddMoney)).toHaveLength(1);
    });
    it('should not show the add money section by default', function () {
        const wallet = shallow(<WalletView/>);

        expect(wallet.find(AddMoney)).toHaveLength(0);
    });
    it('should not display send money section by default', function () {
        const wallet = shallow(<WalletView/>);

        expect(wallet.find(SendMoney)).toHaveLength(0);
        });
    it('should display send money section on clicking send money button', function () {
        const wallet = shallow(<WalletView/>);
        const button = wallet.find('button#sendMoneyBtn');

        button.simulate('click');

        expect(wallet.find(SendMoney)).toHaveLength(1);
    });

    }
);