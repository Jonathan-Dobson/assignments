import React from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class StateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {
                    firstName: 'Mace Windu',
                    _id: 0
                }
            ]
        }
    }
    componentDidMount(){
        this.ANNOUNCE('COMPONENT DID MOUNT')
    }

    // DISPATCHER
    ANNOUNCE = (announcement, props) => {
        console.log(announcement)
        const {HAVEIT} = this
        switch(announcement){
            case 'COMPONENT DID MOUNT': { 
                HAVEIT('GET FULL LIST FROM API AND SAVE TO STATE')
                    .then(()=>{
                        this.ANNOUNCE('GET LIST SUCCESSFUL')
                    })
                    break;
            }

            default: {
                console.log('PLEASE SETUP A SWITCH CASE FOR', announcement, props);
            }
        }
    }
        
    // ACTIONS
    HAVEIT = (action, props) => {
        switch (action) {

            case 'GET FULL LIST FROM API AND SAVE TO STATE': {
                return new Promise(resolve=>{
                    axios.get('/bounty').then(res=>{
                        this.setState({list:res.data}, resolve(true))
                    })
                })
            }

            default: {
                console.log('PLEASE SETUP A SWITCH CASE TO HAVE IT', action, props);
            }
        }
    }

    // RENDER THE PROVIDER
    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                ANNOUNCE: this.ANNOUNCE
            }}> 
                {this.props.children}
            </Provider>
         );
    }
}


export default StateProvider;
export const WithState = (C) => props => <Consumer>
    {value=> <C {...value} {...props}></C>}
</Consumer>


