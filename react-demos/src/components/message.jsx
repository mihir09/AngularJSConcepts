import React, { Component } from 'react'

export class Message extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: "Welcome state"
        }

    }

    changeMessage(){
        this.setState({
            message: "Welcome to React"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>Change</button>
            </>
        )
    }
}

export default Message