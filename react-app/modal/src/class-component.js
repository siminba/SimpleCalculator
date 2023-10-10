import React,{useState} from 'react';



const Container = (props) => {
    const [count, setCount] = useState(1);

    const changeCount = ()=>{
        setCount(count+1);

    }
    const changeCount1 = ()=>{
        setCount(count-1);

    }

    return(
    
        <div className={props.className}>
        <h1 className="font-bold mt-5"style={{color:props.color,  width:props.width}}>This is the function component </h1>
        <h1 className='mt-3'>{count}</h1>
        <button className="bg-blue-100 mt-3 rounded  h-8 w-10 "onClick={changeCount}>++</button>
        <button className="bg-blue-100 mt-3 mb-3 rounded  h-8 w-10 "onClick={changeCount1}>--</button>
        
        </div>
        
    );
}

class Container1 extends React.Component{
    constructor(){
        super();
        this.state={color:"black", 
        count:1
    }
        this.changeCount=this.changeCount.bind(this);
        this.changeCount1=this.changeCount1.bind(this);

    }
    changeCount(){
        this.setState({count:this.state.count+1})
    }
    changeCount1(){
        this.setState({count:this.state.count-1})
    }


    render(){
        return(
            <div className={this.props.className}>
            <h1 className="mt-5 font-bold"style={{color:this.props.color}} >This is the class component</h1>
            <h1 className='mt-3'>{this.state.count}</h1>
            <button  className="bg-green-500 mt-3 rounded h-8 w-12"onClick={this.changeCount}>++</button>
            <button  className="bg-green-500 mt-3 mb-3 rounded h-8 w-12"onClick={this.changeCount1}>--</button>
           
            </div>
        );
    }
}

export {Container, Container1};