import WalletView from "./Wallet.view";
import {shallow} from "enzyme";
import React from "react";
import Header from "../Header";
import DateFilter from "./DateFilter";

describe('DateFilter', function () {
    it('should display 3 radio buttons ', function () {
        const wallet = shallow(<DateFilter id={1}/>);
        const radioButtons = wallet.find('Radio');

        expect(radioButtons).toHaveLength(3);
    });

    it('should display 1 search button ', function () {
        const wallet = shallow(<DateFilter id={1}/>);
        const Button = wallet.find('Button');

        expect(Button).toHaveLength(1);
    });

})