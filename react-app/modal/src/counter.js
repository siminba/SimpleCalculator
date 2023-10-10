import React, { useState } from "react";


const Calc = (props) => {
const [counter, setCount] = useState(0);

const Increment = ()=>{
    setCount(counter+1);
}
const Decrement = ()=>{
    setCount(counter-1);
}
    return(
        <div>
        <button props={props.text}onClick={Increment}>++</button>
        <h1>{counter}</h1>
       
        <button props={props.text}onClick={Decrement}>--</button>
        <h1>{counter}</h1>
        </div>
    );
}

class Calc1 extends React.Component{
    constructor(){
        super();
        this.state={counter1:1}
        
        this.Increment=this.Increment.bind(this);
        this.Decrement=this.Decrement.bind(this);
    }
    Increment(){
        this.setState({counter1:this.state.counter1+1})
    }
    Decrement(){
        this.setState({counter1:this.state.counter1-1})
    }
    render(){
        return(
            <div>
            <button onClick={this.Increment}>++</button>
            <h1>{this.state.counter1}</h1>
            <button onClick={this.Decrement}>--</button>
            <h1>{this.state.counter1}</h1>
            </div>
            

        )
    }

}


export {Calc, Calc1};