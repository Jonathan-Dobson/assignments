import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            namesList: ["abc", "def"]
        }
    }
    ListedNames = (props) => props.map((name, i) => <li key={i}>{name} </li>)

    handleChange = (event) => {
        this.setState({name: event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                name: "",
                namesList: [prev.name,...prev.namesList]
            }
        });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Name: {this.state.name}</h1>
                <input
                    type="text"
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}/>
                <button>Submit</button>
                <ul>
                    {this.ListedNames(this.state.namesList)}
                </ul>
            </form>
        )
    }
}

export default App