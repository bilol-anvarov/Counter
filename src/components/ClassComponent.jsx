import { Component } from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = ()=>{
        this.setState({count: this.state.count + 1})
    }
    decrement = ()=>{
        this.setState({count: this.state.count - 1})
    }
    render(){
        const name = 'bilol'
        return(
            <>
            <h1>likes {this.state.count}</h1>
            <button onClick={this.increment}>like</button>
            <button onClick={this.decrement}>dislike</button>
            </>
        )
    }
}
export default ClassComponent