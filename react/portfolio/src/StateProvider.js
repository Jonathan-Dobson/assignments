import React from 'react';
const {Provider, Consumer} = React.createContext()

class StateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    // ANNOUNCEMENT BROADCASTER AND BEHAVIOR DISPATCHER
    announce = (announcement, props) => {
        const {HAVEIT} = this
        console.log(announcement)
        switch(announcement){
            case 'USER SELECTED NEW LOCATION': { 
                HAVEIT('SAVE THE NEW LOCATION IN STATE', props)
                    .then(()=>{
                        this.announce('NEW LOCATION SAVED')
                    })
                    break;
            }

            default: {
                console.log('PLEASE SETUP A SWITCH CASE FOR', announcement, props);
            }
        }
    }
        
    // THE ACTIONS
    HAVEIT = (action, props) => {
        switch (action) {

            case 'HIDE LOADING WEATHER MODAL': {
                return new Promise(resolve=>{
                    this.setState({loadingWeatherModal: false}, resolve(true))
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
                announce: this.announce
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