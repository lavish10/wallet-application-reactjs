import AddMoney from "./AddMoney";
import React from "react";
import {shallow} from "enzyme";

describe('AddMoney', function () {
    it('should display input box for amount', function () {
        const addMoney = shallow(<AddMoney />)

        expect(addMoney.find('input')).toHaveLength(1);
    });

    it('should display button for add money', function () {
        const addMoney = shallow(<AddMoney />);

        expect(addMoney.find('button')).toHaveLength(1);
    });

});