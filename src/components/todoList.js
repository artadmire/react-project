import React ,{ Component, Fragment } from 'react';
import TodoItem from './todoItem';
import store from "../store"
import { connect }from "react-redux"
import { changeValue,getConfig } from "../store/actionCreate"

class TodoList extends Component {
    constructor(props) {
        super(props)
        console.log(store)
        // console.log(store.getState())
        this.state = {
            inputValue: '',
            list: ["时间"]
        }
        // 只会执行一次 提高性能
        this.changeValue = this.changeValue.bind(this);
        this.addList = this.addList.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlerStoreChange = this.handlerStoreChange.bind(this)
        store.subscribe(this.handlerStoreChange)

    }
   componentWillMount() {
       console.log("componentWillMount")
   }
   // 请求数据
   componentDidMount() {
       console.log("componentDidMount");
        const actions = getConfig()
        store.dispatch(actions);
        // console.log(store.getState())
       
   }
   shouldComponentUpdate() {
       console.log("shouldComponentUpdate")
       return true
   }
   componentWillUpdate() {
       console.log("componentWillUpdate")
   }
   componentDidUpdate() {
       console.log("componentDidUpdate")
   }
  
    render () {
        console.log("render")
        return (
            <Fragment>
                <div>
                    <label htmlFor="interValue"></label>
                    <input id="interValue" ref={(input) => {this.inputs = input} }  value= {this.state.inputValue} type="text" onChange={this.changeValue} /><button onClick={ this.addList}>{this.state.inputValue}</button></div>
                <ul>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
    // 输入内容
    changeValue() {
        this.setState ({
            inputValue: this.inputs.value,
        })

        // const action = {
        //     type: "CHANGE_VALUE",
        //     value:this.inputs.value
        // }
        const action = changeValue(this.inputs.value)
        store.dispatch(action)
        console.log(store.getState())
    }
    // 点击提交
    addList() {
        // 参数是函数 异步的，前一个函数执行完，执行下一下函数
        this.setState((prevState)=>({
            list: [prevState.inputValue,...prevState.list],
            inputValue: ""
        }),() => {
            console.log(this.state.list)
        })
        // this.setState({
        //     list: [this.state.inputValue, ...this.state.list],
        //     inputValue: ""
        // })
    }
    // 删除li
    handleDelete(index) {
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    } 

    getTodoItem() {
        return this.state.list.map((item,index) => {
            return <TodoItem 
            key={ index } 
            item = {item} 
            index={index}
            handleDelete={this.handleDelete}
            ></TodoItem>
        })
    }
    handlerStoreChange () {
        this.setState(store.getState())
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default  connect(mapStateToProps,null)(TodoList)