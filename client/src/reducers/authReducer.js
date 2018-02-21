import {FETCH_USER} from '../actions/types';


export default function(state = null, action){
    
    switch(action.type){
        case FETCH_USER:
            return action.payload.data || false;  //if payload is empty string then it returns false
            
        default:
            return state;
    }
}