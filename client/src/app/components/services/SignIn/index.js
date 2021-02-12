import {Apis} from '../../../../config/Apis' 
import axios from '../../../../config/axiosConfig' 


const signIn = async (userdata) => {
  return await axios.post(Apis?.SignIn,userdata).then(({data})=> data);
}

export default {
    signIn
}