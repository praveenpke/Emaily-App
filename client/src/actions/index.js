import axios from 'axios';
import {FETCH_USER} from './types';


//whenever action creator called then it returns this function
    
export const  fetchUser = () => async (dispatch) =>
{
    const reponse =  await axios.get('/api/current_user')
        
    dispatch({
            type:FETCH_USER,
            payload:response
        });
}
       
    
 
