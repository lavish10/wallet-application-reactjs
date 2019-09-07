import WalletView from "./Wallet.view";
import {shallow} from "enzyme";
import React from "react";
import Header from "../Header";
import SendMoney from "../SendMoney/SendMoney";

describe('WalletView', function () {
        it('should have 1 button for adding and sending money', function () {
            const wallet = shallow(<WalletView/>);
            const buttons = wallet.find('button');

            expect(buttons).toHaveLength(1);
        });
        it('should display the Wallet balance', function () {
            const wallet = shallow( <WalletView balance={100}/>);
            const balance = wallet.find('h2');

            expect(balance).toHaveLength(1);
            expect(balance.text()).toEqual('Balance : ₹ 100');
        });
        it('should display the Wallet owner name', function () {
            const wallet = shallow(<WalletView name='someName'/>);
            const header = wallet.find(Header);

            expect(header.props().name).toEqual('someName');
        });
        it('should hide the balance on clicking add money button', function () {
            const wallet = shallow(<WalletView/>);
            const button = wallet.find('button');

            button.simulate('click');

            expect(wallet.find('#balance').prop('style').display).toEqual('none');
        });
    it('should display send money section on clicking send money button', function () {
        const wallet = shallow(<WalletView/>);
        const button = wallet.find('#sendMoneyBtn');

        button.simulate('click');

        expect(wallet.find(SendMoney)).toHaveLength(1);
    });

    }
);