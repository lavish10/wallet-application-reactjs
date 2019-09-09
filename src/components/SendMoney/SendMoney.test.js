import {shallow} from "enzyme";
import React from "react";
import SendMoney from "./SendMoney";
import SendMoneyService from "../../service/SendMoneyService";
import {InputGroup} from 'react-bootstrap';

jest.mock('axios');
jest.mock('../../service/SendMoneyService');

describe('Send Money Render tests', function () {
    it('should display Send money button', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('Button')).toHaveLength(1);
    });
    it('should display Phone Number label', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find(InputGroup.Text).at(0).text()).toEqual("Phone Number");
    });
    it('should display Amount label', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find(InputGroup.Text).at(1).text()).toEqual("Amount");
    });
    it('should display Remarks label', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find(InputGroup.Text).at(2).text()).toEqual("Remarks");
    });
    it('should display Phone Number field', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('FormControl[name="phoneNumber"]')).toHaveLength(1);
    });
    it('should display Amount field', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('FormControl[name="amount"]')).toHaveLength(1);
    });
    it('should display Remarks field', function () {
        const addMoney = shallow(<SendMoney/>);

        expect(addMoney.find('FormControl[name="remarks"]')).toHaveLength(1);
    });
});
describe('send money simulation tests', function () {
    it('should update the status after send money is successful', async function () {
        SendMoneyService.sendMoney.mockResolvedValue({amount: 50, wallet: {name: 'lavish'}});
        const mockFn = jest.fn();
        const sendMoney = shallow(<SendMoney id={1}
                                             changeDisplay={mockFn}
                                             onSendMoney={mockFn}
        />);
        const phoneNumberEvent = {target: {value: '0987654321'}};
        const amountEvent = {target: {value: 50}};
        const remarksEvent = {target: {value: 'Pizza'}};

        sendMoney.find('input[name="phoneNumber"]').simulate('change', phoneNumberEvent);
        sendMoney.find('input[name="amount"]').simulate('change', amountEvent);
        sendMoney.find('input[name="remarks"]').simulate('change', remarksEvent);
        sendMoney.find('button').simulate('click');
        await Promise.resolve();
        expect(sendMoney.find('span#response').text()).toEqual(`You have successfully transferred 50 in lavish wallet`);
    });
    it('should update the status after if no wallet found', async function () {
        SendMoneyService.sendMoney.mockRejectedValue({response: {data: {message: 'Wallet not found'}}});
        const mockFn = jest.fn();
        const sendMoney = shallow(<SendMoney id={1}
                                             changeDisplay={mockFn}
                                             onSendMoney={mockFn}
        />);
        const phoneNumberEvent = {target: {value: '0987654321'}};
        const amountEvent = {target: {value: 50}};
        const remarksEvent = {target: {value: 'Pizza'}};

        sendMoney.find('input[name="phoneNumber"]').simulate('change', phoneNumberEvent);
        sendMoney.find('input[name="amount"]').simulate('change', amountEvent);
        sendMoney.find('input[name="remarks"]').simulate('change', remarksEvent);
        sendMoney.find('button').simulate('click');
        await Promise.resolve();
        expect(sendMoney.find('span#response').text()).toEqual(`Wallet not found`);
    });
    it('should update the status if insufficient balance', async function () {
        SendMoneyService.sendMoney.mockRejectedValue({response: {data: {message: 'Insufficient Balance in Wallet'}}});
        const mockFn = jest.fn();
        const sendMoney = shallow(<SendMoney id={1}
                                             changeDisplay={mockFn}
                                             onSendMoney={mockFn}
        />);
        const phoneNumberEvent = {target: {value: '0987654321'}};
        const amountEvent = {target: {value: 50}};
        const remarksEvent = {target: {value: 'Pizza'}};

        sendMoney.find('input[name="phoneNumber"]').simulate('change', phoneNumberEvent);
        sendMoney.find('input[name="amount"]').simulate('change', amountEvent);
        sendMoney.find('input[name="remarks"]').simulate('change', remarksEvent);
        sendMoney.find('button').simulate('click');
        await Promise.resolve();
        expect(sendMoney.find('#response').text()).toEqual(`Insufficient Balance in Wallet`);
    });
});