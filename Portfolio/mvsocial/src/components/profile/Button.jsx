import React,{Component} from 'react';
import './CounterFollow.css';

class Button extends Component {
    render(){
        return(
        <button className="follow" onClick={this.props.changeValue}>{this.props.innerText}</button>
        )
    }

}

export default Button;