import React,{Component} from 'react';
import './CounterFollow.css';
import Button from './Button';



class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: parseInt(this.props.initValue),
        }
    }
    changeCounterValue = () => {
        this.setState((prevState) => {
            return({
                count: prevState.count + 1
            })
        })
    }
    render(){
        return(
            <div className="numberFolowers">
                <div>
                {this.state.count} {this.props.initText}
                </div>
                <Button changeValue={this.changeCounterValue} innerText="Follow" />
            </div>
        )
    }
}     
export default Counter;