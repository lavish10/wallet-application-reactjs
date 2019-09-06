import WalletView from "./Wallet.view";
import {shallow} from "enzyme";
import React from "react";

describe('WalletView', function () {
        it('should have 2 buttons for adding and sending money', function () {
            const wallet = shallow(<WalletView/>);
            const buttons = wallet.find('button');

            expect(buttons).toHaveLength(2);
        });
        it('should display the WalletView owner name', function () {
            const wallet = shallow(<WalletView/>);
            const name = wallet.find('p');

            expect(name).toHaveLength(1);
        });
        it('should display the WalletView balance', function () {
            const wallet = shallow(<WalletView/>);
            const balance = wallet.find('h2');

            expect(balance).toHaveLength(1);
        });
        it('should display the WalletView balance', function () {
            const wallet = shallow(<WalletView/>);
            const balance = wallet.find('h2');

            expect(balance).toHaveLength(1);
        });
    }
)