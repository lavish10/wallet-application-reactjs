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
        jest.useFakeTimers();
        const mockFn = jest.fn();
        const mockFn2 = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} changeDisplay={()=>{}} id={'1234567890'}/>);
        const event = {target: {value: 50}};

        addMoney.find('input').simulate('change',event);
        addMoney.find('button').simulate('click');
        await Promise.resolve();

        expect(addMoney.find('#success').text()).toEqual('You have successfully add 50 in your wallet');
    });

    it('should remove the updated status 2 seconds after successful credit of money', async function () {
        AddMoneyService.post.mockResolvedValue({amount:50});
        jest.useFakeTimers();
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} changeDisplay={()=>{}} id={'1234567890'}/>);
        const event = {target: {value: 50}};

        addMoney.find('input').simulate('change',event);
        addMoney.find('button').simulate('click');
        await Promise.resolve();
        jest.runAllTimers();

        expect(addMoney.find('#success').text()).toEqual('');
    });

    it('should display error when balance is less than 50', async function () {
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 5}};

        addMoney.find('input').simulate('change',event);

        expect(addMoney.find('#failure').text()).toEqual('Amount must be greater or equal to 50');
    });

    it('should display error when balance is greater than 50000', async function () {
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 60000}};

        addMoney.find('input').simulate('change',event);

        expect(addMoney.find('#failure').text()).toEqual('Amount must be less than or equal to 50000');
    });

    it('should display error when balance is not multiple of 50', async function () {
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 623}};

        addMoney.find('input').simulate('change',event);

        expect(addMoney.find('#failure').text()).toEqual('Amount must be a multiple of 50');
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