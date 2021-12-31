import React from 'react';

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            val : 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        console.log("incrementing");
        this.setState((state) => ({
            val : state.val + 1
        }));
    }

    decrement(){
        console.log("decrementing");
        this.setState((state) => ({
            val : state.val - 1
        }));
    }

    render(){
        let val = this.state.val;
        return(
            <div>
                <h1>Val : {val}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }






}

export default Counter;