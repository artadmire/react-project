import { createStore , applyMiddleware} from "redux"
import reducer from "./reducer"
// 对store的dispatch方法进行了升级，使action的的返回值不再只是对象，可以是函数，可以在action中进行异步数据请求
import thunk from "redux-thunk"

const store = createStore(
    reducer,
    applyMiddleware(thunk)
    );

export default store;