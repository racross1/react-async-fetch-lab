import React, { Component } from 'react';

// import Timer from './Timer'
// import Controls from './Controls'

class App extends Component {
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json)
        .then(console.log)
    }

    render(){
        return(
            <div>Hi!</div>
        )

    }
}

export default App
