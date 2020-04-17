import React,{Component} from 'react';
import './CounterFollow.css';

class Like extends Component {
    constructor(props){
        super(props);
        this.state = {
            countLikes: parseInt(this.props.value),
        }
    }
    changeLikesValue = () => {
        this.setState((prevValue) => {
            return({
                countLikes: prevValue.countLikes + 1
            })
        })
    }
    render(){
        return(
            <div className="likePanel">
            <button className="btnLike" onClick={this.changeLikesValue}><i className="fas fa-heart"></i></button>
            <span>{this.state.countLikes} likes</span>
            </div>
        )
    }
}

export default Like;