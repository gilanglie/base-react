import axios from 'axios';
import {MAIN} from './type';

export const mainAction = () => {
    return async (dispatch) =>{
        try {
            const res = await axios.get('http://www.mocky.io/v2/5c9105cb330000112b649af8',{crossdomain: true})
            console.log(res)
            dispatch({
                type: MAIN,
                payload: res.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    
}
