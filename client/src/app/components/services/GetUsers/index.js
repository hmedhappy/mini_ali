 import {Apis} from '../../../../config/Apis' 
 import axios from '../../../../config/axiosConfig' 

 
 const getUsers = async () => {
   return await axios.get(Apis?.GetUsers).then(({data})=> data);
 }

 export default {
     getUsers
 }