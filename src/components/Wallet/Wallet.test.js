import Wallet from "./Wallet";
import React from "react";
import WalletView from "./Wallet.view";
import {shallow} from "enzyme";

describe('Wallet', function () {
    it('should display wallet view', function () {
        const wallet = shallow(<Wallet id={'1289230213'}/>)

        expect(wallet.find(WalletView)).toHaveLength(1);
    });
});