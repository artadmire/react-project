import { CHANGE_VALUE ,CHANGE_CONFIG} from "./actionType"
import axios from "axios"
export function changeValue(value) {
    return {
        type: CHANGE_VALUE,
        value
    }
    
}
export function saveConfig(config) {
    return {
        type: CHANGE_CONFIG,
        config
    }
}
export const getConfig = () => {
    return (dispatch) => {
        axios.get('/h5/misc/config').then((res) => {
            console.log(res);
            const actions = saveConfig(res)
            dispatch(actions)
        }).catch((error) => {
            console.log(error)
        })
    }
}
 