import axios from "axios";

class WalletModel{
    static get(id){
        return axios.get('/api/wallets/' + id);
    }
}

export default WalletModel