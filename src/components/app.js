import React,{ Component } from "react"
import store from "../store"
import Header from '../common/header/index';
import { GlobalStyle } from '../reset';
import TodoList from "./todoList"
import Trans from "./transition"
import { Provider } from "react-redux"

 export default class App extends Component {
   
    render () {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle/>
                    <Header />
                    <TodoList></TodoList>
                    <Trans></Trans>
                </div>
            </Provider>
        )
    }
}