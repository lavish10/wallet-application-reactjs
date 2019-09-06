import axios from "axios";

export default function addMoneyService(id, data, success, error) {
    axios.post('/api/wallets/' + id + '/transactions', data)
        .then(response => success(response))
        .catch(err => error(err));
}