import React, { Component } from 'react';

// define parent class based component

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // display title
    render() {
        return (
            <div>
                <h1>Simple MERN App</h1>
            </div>
        )
    }
}

export default AppContainer;