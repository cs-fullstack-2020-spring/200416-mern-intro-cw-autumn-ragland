import React, { Component } from 'react';

// define parent class based component

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            gender : "",
            age : 0,
            characterArray : [],
        }
    }

    // load mock data into array
    componentDidMount = () => {
        // this.state.characterArray.push({
        //     name : "Autumn",
        //     gender : "Female",
        //     age : 21,
        // });
        // this.state.characterArray.push({
        //     name : "Adam",
        //     gender : "Male",
        //     age : 22,
        // });
        // this.setState({characterArray : this.state.characterArray});
        this.loadData();
    }

    loadData = async() => {
        const response = await fetch('/api');
        const json = await response.json();
        console.table(json);
        this.setState({characterArray : json});
    }

    // handle form input
    handleChange = (event) => {
        if(event.target.name == "name"){
            this.setState({name : event.target.value});
        } else if(event.target.name === "gender"){
            this.setState({gender : event.target.value});
        } if(event.target.name === "age"){
            this.setState({age : event.target.value});
        }
    }

    // handle form submission
    handleSubmission = (event) => {
        event.preventDefault();
        console.table(this.state);
    }

    // display title, form, and all characters
    render() {
        return (
            <div>
                <h1>Simple MERN App</h1>
                <form>
                    <label htmlFor="characterName">Character Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br />

                    <label htmlFor="gender">Character Gender</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} />

                    <br />
                    <label htmlFor="age">Character Age</label>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />

                    <br/>
                    <button onClick = {this.handleSubmission}>Submit</button>
                </form>
                <div>
                    {
                        this.state.characterArray.map((character, index) => {
                            return(
                                <div key = {index}>
                                    {character.name} <hr/>
                                    {character.gender} <hr/>
                                    {character.age} <hr/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default AppContainer;