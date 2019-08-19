import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import Axios from 'axios'

const state = {
    data: {
        count: 'Loading...',
        results: [
            {
                name: ""
            }
        ]
    }
}

class Person extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "..."
        }

    }
    componentWillReceiveProps(next){
        this.AxiosGet(next)
    }
    componentDidMount(){
        this.AxiosGet(this.props)
    }
    
    AxiosGet = (props) => {
        if(props.match.params._id){
            Axios.get(`https://swapi.co/api/people/${props.match.params._id}`)
            .then(res=>{
                this.setState({
                    name: res.data.name
                })
            })
        }
    }
    PersonName = () => <h3>{this.state.name}</h3>
    render() {
        return (
            <div>
                <h2>Person </h2>
                {this.PersonName()}
                <div>{this.props.match.params._id}</div>

            </div>
        )
    }
}

class Nav extends React.Component {
    constructor() {
        super()
        this.state = state
    }

    AxiosGet = (url) => {
        this.setState(state)
        Axios
            .get(url)
            .then((res) => {
                // console.log(res)
                this.setState(res)
            })
    }
    AxiosGetNext = () => {
        this.AxiosGet(this.state.data.next)
    }
    AxiosGetPrev = () => {
        this.AxiosGet(this.state.data.previous)
    }
    componentDidMount() {
        this.AxiosGet('https://swapi.co/api/people/')
    }
    NextButton = () => this.state.data.next
        ? <button onClick={this.AxiosGetNext}>Next</button>
        : "";
    PrevButton = () => this.state.data.previous
        ? <button onClick={this.AxiosGetPrev}>Previous</button>
        : "";

    PeopleLinkMap = (props) => props
        .people
        .map((person, index) => <li key={index}>
            <Link
                to={`/person/${String(person.url)
                .split("/")
                .reverse()[1]}`}>{person.name}</Link>
        </li>)

    render() {
        return (
            <div>
                <ul className="nav">
                    <p>{this.state.data.count}
                        Star Wars People
                    </p>
                    <this.PeopleLinkMap people={this.state.data.results}/>
                </ul>
                <div>
                    <this.PrevButton/>
                    <this.NextButton/>
                </div>
            </div>
        )

    }
}

const Home = () => <div>Home</div>

export default() => <BrowserRouter>
    <div>Star Wars</div>
    <Nav/>
    <Switch>
        <Route path='/person/:_id' component={Person}/>
        <Route path='/' component={Home}/>
    </Switch>
</BrowserRouter>