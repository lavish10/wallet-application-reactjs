import AddMoney from "./AddMoney";
import React from "react";
import {shallow} from "enzyme";
import AddMoneyService from "../../service/AddMoneyService";

jest.mock('axios');
jest.mock('../../service/AddMoneyService');
describe('AddMoney', function () {
    it('should display input box for amount', function () {
        const addMoney = shallow(<AddMoney/>);

        expect(addMoney.find('FormControl[name="amount"]')).toHaveLength(1);
    });

    it('should display button for add money', function () {
        const addMoney = shallow(<AddMoney/>);

        expect(addMoney.find('Button')).toHaveLength(1);
    });

    it('should update the status after successful credit of money', async function () {
        AddMoneyService.post.mockResolvedValue({amount:50});
        jest.useFakeTimers();
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} changeDisplay={() => {
        }} id={'1234567890'}/>);
        const event = {target: {value: 50}};

        addMoney.find('FormControl[name="amount"]').simulate('change', event);
        addMoney.find('Button').simulate('click');
        await Promise.resolve();

        expect(addMoney.find('#success').text()).toEqual('You have successfully add 50 in your wallet');
    });

    it('should remove the updated status 2 seconds after successful credit of money', async function () {
        AddMoneyService.post.mockResolvedValue({amount: 50});
        jest.useFakeTimers();
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} changeDisplay={() => {
        }} id={'1234567890'}/>);
        const event = {target: {value: 50}};

        addMoney.find('FormControl[name="amount"]').simulate('change', event);
        addMoney.find('Button').simulate('click');
        await Promise.resolve();
        jest.runAllTimers();

        expect(addMoney.find('#success').text()).toEqual('');
    });

    it('should display error when balance is less than 50', async function () {
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 5}};

        addMoney.find('FormControl[name="amount"]').simulate('change', event);
        addMoney.find('FormControl[name="amount"]').simulate('blur');

        expect(addMoney.find('#failure').text()).toEqual('Amount must be greater or equal to 50');
    });

    it('should display error when balance is greater than 50000', async function () {
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 60000}};

        addMoney.find('FormControl[name="amount"]').simulate('change', event);
        addMoney.find('FormControl[name="amount"]').simulate('blur');

        expect(addMoney.find('#failure').text()).toEqual('Amount must be less than or equal to 50000');
    });

    it('should display error when balance is not multiple of 50', async function () {
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 623}};

        addMoney.find('FormControl[name="amount"]').simulate('change', event);
        addMoney.find('FormControl[name="amount"]').simulate('blur');

        expect(addMoney.find('#failure').text()).toEqual('Amount must be a multiple of 50');
    });

    it('should update the status to empty if 0 amount is added', async function () {
        AddMoneyService.post.mockResolvedValue({amount:50});
        const mockFn = jest.fn();
        const addMoney = shallow(<AddMoney onAddMoney={mockFn} id={'1234567890'}/>);
        const event = {target: {value: 0}};

        addMoney.find('FormControl[name="amount"]').simulate('change', event);
        addMoney.find('Button').simulate('click');
        await Promise.resolve();

        expect(addMoney.find('#success').text()).toEqual('');
    });
    it('should be able to set status on focus', async function () {
        const addMoney = shallow(<AddMoney/>);
        const focus = addMoney.find('FormControl');

        focus.simulate('focus');

        expect(addMoney.state().errorstatus).toEqual('');
    });
    it('should be able to set status for failed to add money', async function () {
        AddMoneyService.post.mockResolvedValue(undefined);
        const addMoney = shallow(<AddMoney/>);
        const button = addMoney.find('Button');

        button.simulate('click');
        await Promise.resolve().catch(() => {
            expect(addMoney.state().errorstatus).toEqual("Failed to add money");
            expect(addMoney.state().status).toEqual("")
        });
    });

});