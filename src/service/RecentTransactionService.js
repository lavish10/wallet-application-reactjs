import axios from "axios";

export default class RecentTransactionService {
    static get(id) {
        return axios.get('/api/wallets/' + id + '/transactions').then(response => response.data)
    }
}

