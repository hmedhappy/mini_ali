 import {Apis} from '../../../../config/Apis' 
 import axios from '../../../../config/axiosConfig' 

 
 export const getPosts = async () => {
     return  await axios.get(Apis?.GetPosts).then(({data})=> data  );
 }

 export default {
    getPosts
 }