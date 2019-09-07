import AddMoney from "./AddMoney";
import React from "react";
import {shallow} from "enzyme";
import AddMoneyService from "../../service/AddMoneyService";

jest.mock('axios');
jest.mock('../../service/AddMoneyService');
describe('AddMoney', function () {
    it('should display input box for amount', function () {
        const addMoney = shallow(<AddMoney/>)

        expect(addMoney.find('input')).toHaveLength(1);
    });

    it('should display button for add money', function () {
        const addMoney = shallow(<AddMoney/>);

        expect(addMoney.find('button')).toHaveLength(1);
    });

    it('should update the status after successful credit of money', async function () {
        AddMoneyService.post.mockResolvedValue({amount:50});
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 50}};

        addMoney.find('input').simulate('change',event);
        addMoney.find('button').simulate('click');
        await Promise.resolve();

        expect(addMoney.find('#success').text()).toEqual('You have successfully add 50 in your wallet');
    });

    it('should update the status to empty if 0 amount is added', async function () {
        AddMoneyService.post.mockResolvedValue({amount:50});
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 0}};

        addMoney.find('input').simulate('change',event);
        addMoney.find('button').simulate('click');
        await Promise.resolve();

        expect(addMoney.find('#success').text()).toEqual('');
    });

});