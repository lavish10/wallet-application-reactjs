import axios from "axios";
export default class FilterService {
    static get(id, query){
        return  axios.get('/api/wallets/' + id + '/transactions/filters',query).then(response=>response.data);
    }
}

