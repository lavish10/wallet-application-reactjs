import Wallet from "./Wallet";
import {shallow} from "enzyme";
import React from "react";

describe('Wallet', function () {
        it('should have 2 buttons for adding and sending money', function () {
            const wallet = shallow(<Wallet/>);
            const buttons = wallet.find('button');

            expect(buttons).toHaveLength(2);
        });
    }
)