import React from 'react';
const {Provider, Consumer} = React.createContext()


class StateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0}
    }
    // ANNOUNCEMENT BROADCASTER AND DISPATCHER
    announcement = (announcement) => {
        const {make, see} = this
        switch(announcement){
            case "BUTTON 1 CLICKED":
                    see('IF COUNT IS ZERO')
                        .then(ifSo=>{
                            make( 'A DEBUG MESSAGE', ifSo ? 'its 0':'its not 0' )
                            make( 'THE COUNT INCREMENT BY ONE' )
                        })
                    break;
            case "BUTTON 2 CLICKED":
                    console.log('add two');
                    break;
            default:
                    console.log('default');
        }
    }

    
    // THE 'SEE' MAP
    see = (question, props) => {
        switch(question){
            case "IF COUNT IS ZERO": return this.seeIfCountIsZero(this.state)
            case "IF COUNT IS THREE": return this.seeIfCountIsThree(this.state)
            default: return false;
        }
    }

    // THE 'ACTION' MAP
    make = (action, props) => {
        switch (action) {
            case 'A DEBUG MESSAGE': return this.makeADebugMessage(props)
            case 'THE COUNT INCREMENT BY ONE': return this.makeTheCountIncrementByOne()
            default: break;
        }

    }

    // ALL OF THE 'ACTION' FUNCTIONS
    makeADebugMessage = (props) => {
        return new Promise(res=>{
            console.log(props)
            res(true)
        })
    }
    makeTheCountIncrementByOne = () => {
        return new Promise((resolve, reject) => {
            this.setState(prev=>({count: prev.count +1 }),()=>resolve(true)) 
        });
    }

    // ALL OF THE 'SEE' FUNCTIONS
    seeIfCountIsZero = (props) =>{
        return new Promise((resolve)=>{
            resolve(props.count === 0 ? true : false)
        })
    }
    seeIfCountIsThree = (props) =>{
        return props.count === 3 ? true : false

    }

    // RENDER THE PROVIDER
    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                announce: this.announcement
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