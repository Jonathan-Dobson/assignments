import axios from 'axios'
import React from 'react';
import TodosList from './todosList'

const apiUrl = "http://api.vschool.io/jonathan/todo"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: [{
                "completed": false,
                "_id": "5d40ba04db7b285675be3825",
                "title": "code some js",
                "description": "on the couch",
                "price": 44,
                "imgUrl": ""
            },{
                "completed": false,
                "_id": "5d40ba04db7b285675be3825",
                "title": "code some js",
                "description": "on the couch",
                "price": 44,
                "imgUrl": ""
            }]
        }
    }
    componentDidMount(){
        axios.get("https://vschool-cors.herokuapp.com?url=http://api.vschool.io/jonathan/todo").then(res=>{
            console.log('get response',res)
        })
    }
    render(){
        return (
            <div>
                <h1>Todos</h1>
                <TodosList todos={this.state.todos} />
            </div>
        )
    }
}

export default App