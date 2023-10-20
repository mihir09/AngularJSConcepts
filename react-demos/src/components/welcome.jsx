import React, {Component} from 'react';


export class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome {this.props.name} aka {this.props.heroName}</h1>
                {this.props.children}
            </React.Fragment>
        )
    }
}