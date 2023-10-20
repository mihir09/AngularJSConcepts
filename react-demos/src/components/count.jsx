import React, { Component } from 'react'

export class Count extends Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

    }

    incrementCount(){
        this.setState(
            {count: this.state.count+1},
            ()=>{console.log("Callback", this.state.count)}
        )
        console.log(this.state.count)
    }

    incrementFive(){
        for (let i = 0; i < 5; i++) {
            this.incrementCount();
        }
      
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.incrementCount()}}>Increment</button>
                <br/>
                <button onClick={()=>{this.incrementFive()}}>Increment 5</button>
            </>
        )
    }
}

export default Count