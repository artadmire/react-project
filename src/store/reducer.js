import { CHANGE_VALUE,CHANGE_CONFIG } from "./actionType"

const defaultState = {
    inputValue: "hello",
    list: [],
    config: null
}

export default (state = defaultState,action) => {
    // state是上一次数据的内容
    // action是接受到的新的数据，返回给store
    console.log(state,action)
    if(action.type === CHANGE_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }
    if (action.type === CHANGE_CONFIG) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.config = action.value
        return newState;
    }
    return state;
}