import  React ,{ Component } from 'react';
import { Logo } from "./style"
// import { CSSTransition } from "react-transition-group"
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            primary: false
        }
    }

    handleClick (e) {
        e.preventDefault();
        this.setState({
            focus: !this.state.focus,
            primary: true
        })
        
    }

    render () {
        return (
            <div>
                {/* <CSSTransition timeout={200} in = {this.state.primary} className="slide" > */}
                    <Logo  className = { this.state.focus ? "focus" : "" }  onClick = {this.handleClick.bind(this)}  primary href="">这里是头部</Logo>
                {/* </CSSTransition> */}
            </div>
        )
    }
}
