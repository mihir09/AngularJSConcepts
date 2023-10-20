import React, { Component } from 'react'

export class Handlers extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: "Hello"
        }

        this.handlers = this.handlers.bind(this)

    }

    handlers (){
        this.setState({
            message:"new message"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.handlers}>Change</button>
                
            </>
        )
    }
}

export default Handlers