import axios from 'axios';
import {FETCH_USER} from './types';

export const  fetchUser = () => {
    //whenever action creator called then it returns this function
    
    return function(dispatch){
        axios
            .get('/api/current_user')
            .then(response => dispatch({
                type:FETCH_USER,
                payload:response
            }));
    }
 
}