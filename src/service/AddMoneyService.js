import axios from "axios";
export default class AddMoneyService {
   static post(id, data){
      return  axios.post('/api/wallets/' + id + '/transactions', data).then(response=>response.data)
   }
}

