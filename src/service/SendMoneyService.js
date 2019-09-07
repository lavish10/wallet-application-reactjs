import axios from "axios";

export default class SendMoneyService {
    static sendMoney(id, data) {
        return axios.post('/api/wallets/' + id + '/transactions', data).then(response => response.data)
    }
}

