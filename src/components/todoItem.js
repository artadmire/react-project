import React, { Component } from "react"
import PropsTypes from "prop-types"

class TodoItem extends Component {
    constructor (props) {
        super(props)
        this.deletLi = this.deletLi.bind(this)
    }
    // 一个组件从父组件接受参数
    // 只有父组件的render()函数不是第一次执行
    // 借助这个周期函数提高react执行性能
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.item !== this.props.item) {
            return true
        }else {
            return false
        }
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        console.log("item render")
        const { item, index } = this.props 
        return (
            <li 
            onClick={ this.deletLi }
            // dangerouslySetInnerHTML={{ __html: item }}
            >{item}</li>
        )
    }
    // 接受父组件传递的函数
    deletLi () {
        const { index , handleDelete , test} = this.props
        handleDelete(index)
    }
    
}


TodoItem.propTypes = {
    test: PropsTypes.string.isRequired,
    // 必须传递
    index: PropsTypes.number.isRequired,
    item: PropsTypes.oneOfType([PropsTypes.string,PropsTypes.array]),
    handleDelete: PropsTypes.func
}
TodoItem.defaultProps = {
    test: "hello,word"
}
export default TodoItem;