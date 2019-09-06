import WalletView from "./Wallet.view";
import {shallow} from "enzyme";
import React from "react";
import Header from "./Header";

describe('WalletView', function () {
        it('should have 1 button for adding and sending money', function () {
            const wallet = shallow(<WalletView/>);
            const buttons = wallet.find('button');

            expect(buttons).toHaveLength(1);
        });
        it('should display the Wallet balance', function () {
            const wallet = shallow(<WalletView/>);
            const balance = wallet.find('h2');

            expect(balance).toHaveLength(1);
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

    }
)