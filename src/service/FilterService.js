import axios from "axios";
export default class FilterService {
    static get(id, query){
        return  axios.get('/api/wallets/' + id + '/transactions/filters?startDate='+query.startDate+'&endDate='+query.endDate).then(response=>response.data);
    }
}

