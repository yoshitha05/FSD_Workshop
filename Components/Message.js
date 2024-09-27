import React, { Component } from 'react';

class Messsage extends Component {
constructor(){
    super()
    this.state = {
        message: 'welcome visitor'
    }
    
}
changeMessage(){
    this.setState({
        message: "Bye visitor"
    })
}
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Click</button>
            </div>
            
        );
    }
}

export default Messsage;
