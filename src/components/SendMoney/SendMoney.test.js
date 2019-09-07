import {shallow} from "enzyme";
import React from "react";
import SendMoney from "./SendMoney";

describe('Send Money', function () {
    it('should display Send money button', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('button')).toHaveLength(1);
    });
    it('should display Phone Number label', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('label').at(0).text()).toEqual("Phone Number");
    });
    it('should display Amount label', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('label').at(1).text()).toEqual("Amount");
    });
    it('should display Remarks label', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('label').at(2).text()).toEqual("Remarks");
    });
    it('should display Phone Number field', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('input[name="phoneNumber"]')).toHaveLength(1);
    });
    it('should display Amount field', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('input[name="amount"]')).toHaveLength(1);
    });
    it('should display Remarks field', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('input[name="remarks"]')).toHaveLength(1);
    });
});