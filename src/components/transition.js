import  React , { Component , Fragment} from 'react';
import "./style.css"
// import { CSSTransition } from 'react-transition-group';
class Trans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handdleToggle = this.handdleToggle.bind(this)
    }
    handdleToggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <Fragment>
                {/* <CSSTransition */}
                    {/* in={this.state.show}
                    timeout={1000}
                    className="fade"
                > */}
                    <div  >hello</div>
                {/* </CSSTransition> */}
                <button  onClick={this.handdleToggle}>toggle</button>
            </Fragment>
        )
    }
}

export default Trans;