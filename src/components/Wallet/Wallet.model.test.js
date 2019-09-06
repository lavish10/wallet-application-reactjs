import axios from 'axios';
import React from "react";
import WalletModel from "./Wallet.model";

jest.mock('axios');
describe('WalletModel', function () {

    test('should get the name of user from backend', () => {
        const name = {name: 'DummyUser'};

        axios.get.mockResolvedValue(name);

        return WalletModel.get(1234567890).then(data => expect(data).toEqual(name));
    });

})