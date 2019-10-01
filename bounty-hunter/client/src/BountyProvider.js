import React from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class StateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    firstName: '',
                    lastName: '',
                    skill: '',
                    bounty: 0,
                    _id: 0
                }
            ],
            saving: false,
            editing: false,
            creating: false,
            deleting: false,
            edit: {
                firstName: '',
                lastName: '',
                skill: '',
                bounty: 0,
                _id: 0
            }

        }
    }
    componentDidMount() {
        this.ANNOUNCE('COMPONENT DID MOUNT')
    }

    // DISPATCHER
    ANNOUNCE = (announcement, props) => {
        console.log(announcement)
        const {HAVEIT} = this
        switch (announcement) {
            case 'COMPONENT DID MOUNT':
                {
                    HAVEIT('GET FULL LIST FROM API AND SAVE TO STATE').then(() => {
                        this.ANNOUNCE('GET LIST SUCCESSFUL')
                    })
                    break;
                }
                // EDIT FORM MODAL
            case 'CLICKED EDIT PERSON':
                {
                    HAVEIT('SHOW EDIT MODAL', props)
                    break;
                }
                // ADD FORM MODAL
            case 'CLICKED ADD NEW':
                {
                    HAVEIT('SHOW CREATE MODAL', props)
                    break;
                }

            case 'CLICKED EDIT SKILL':
                {
                    HAVEIT('CHANGE SKILL TO:', props)
                    break;
                }

            case 'CLICKED EDIT TO ALIVE':
                {
                    HAVEIT('CHANGE TO ALIVE')
                    break;
                }

            case 'CLICKED EDIT TO DEAD':
                {
                    HAVEIT('CHANGE TO DEAD')
                    break;
                }

            case 'CLICKED EDIT DELETE':
                {
                    HAVEIT('CHANGE TO DELETE')
                    break;
                }

            case 'CLICKED EDIT UNDELETE':
                    {
                        HAVEIT('CHANGE TO UNDELETE')
                        break;
                    }

            case 'CLICKED CANCEL EDIT':
                {
                    HAVEIT('HIDE EDIT MODAL')
                    break;
                }

            case 'CLICKED SAVE EDIT':
                {
                    HAVEIT('SHOW SAVING MODAL')
                    HAVEIT('SEND AXIOS CRUD').then((person)=>{
                        this.ANNOUNCE('EDIT UPDATE SAVED',person)
                    })
                    break;
                }

            case 'EDIT UPDATE SAVED':
                {
                    HAVEIT('SAVE EDIT TO STATE',props).then(this.ANNOUNCE('EDIT SAVED TO STATE'))
                    break;
                }

            case 'EDIT SAVED TO STATE':
                {
                    HAVEIT('HIDE EDIT MODAL')
                    HAVEIT('HIDE SAVING MODAL')
                    // HAVEIT('HIDE CREATE MODAL')
                    break;
                }

            default:
                {
                    console.log('PLEASE SETUP A SWITCH CASE FOR', announcement, props);
                }
        }
    }

    // ACTIONS
    HAVEIT = (action, props) => {
        switch (action) {

            case 'GET FULL LIST FROM API AND SAVE TO STATE':
                {
                    return new Promise(resolve => {
                        axios
                            .get('/bounty')
                            .then(res => {
                                this.setState({
                                    list: res.data
                                }, resolve(true))
                            })
                    })
                }

                // EDIT FORM MODAL
            case 'SHOW CREATE MODAL':
                {
                    return new Promise(resolve=>{
                        this.setState({creating: true, editing: true},resolve(true))
                    })
                }
            case 'SHOW EDIT MODAL':
                {
                    return new Promise(resolve => {
                        this.setState({
                            editing: true,
                            edit: {
                                ...props
                            }
                        }, resolve(props))
                    })
                }
            // case 'HIDE CREATE MODAL':
            //     {
            //         return new Promise(resolve => {
            //             this.setState({
            //                 creating: false,
            //                 editing: false,
            //                 ...props
            //             }, resolve(props))
            //         })
            //     }
            case 'HIDE EDIT MODAL':
                {
                    return new Promise(resolve => {
                        this.setState({
                            editing: false,
                            creating: false,
                            ...props
                        }, resolve(props))
                    })
                }

                // FORM MODAL
            case 'SHOW SAVING MODAL':
                {
                    return new Promise(resolve => {
                        this.setState({
                            saving: true,
                            ...props
                        }, resolve(props))
                    })
                }

            case 'HIDE SAVING MODAL':
                {
                    return new Promise(resolve => {
                        this.setState({
                            saving: false,
                            ...props
                        }, resolve(props))
                    })
                }

            case 'CHANGE SKILL TO:':
                {
                    return new Promise(resolve => {
                        this.setState(prev => ({
                            edit: {
                                ...prev.edit,
                                skill: props
                            }
                        }), resolve(true))
                    })
                }

            case 'CHANGE TO ALIVE':
                {
                    return new Promise(resolve => {
                        this.setState(prev => ({
                            edit: {
                                ...prev.edit,
                                living: true
                            }
                        }), resolve(true))
                    })
                }

            case 'CHANGE TO DEAD':
                {
                    return new Promise(resolve => {
                        this.setState(prev => ({
                            edit: {
                                ...prev.edit,
                                living: false
                            }
                        }), resolve(true))
                    })
                }

            case 'CHANGE TO DELETE':
                {
                    return new Promise(resolve=>{
                        this.setState({deleting: true},resolve(true))
                    })
                }

            case 'CHANGE TO UNDELETE':{
                return new Promise(resolve=>{
                    this.setState({deleting: false},resolve(true))
                })
            }

            case 'SAVE EDIT TO STATE':
                {
                    return new Promise(resolve => {
                        this.setState(prev => {
                            if (this.state.creating) {
                                return ({
                                    list: [
                                        ...prev.list,
                                        props,
                                    ]
                                })
                            } else {
                                let people = prev
                                    .list
                                    .map(person => {
                                        return person._id === prev.edit._id
                                            ? prev.edit
                                            : person
                                    })
                                return ({
                                    list: [...people]
                                })
                            }

                        }, resolve(true))
                    })
                }

                // AXIOS
            case 'SEND AXIOS CRUD':
                {
                    return new Promise((resolve, reject) => {

                    let edit=this.state.edit
                    if(this.state.creating){delete edit._id}
                    console.log('axios',edit)


                        return this.state.creating
                            ? axios
                                .post(`/bounty`, edit)
                                .then(res => resolve(res.data))
                                .catch(e => reject(`error: ${e}`))
                            : this.state.deleting
                                ? axios
                                    .delete(`/bounty/${this.state.edit._id}`)
                                    .then(res => resolve(res.data))
                                    .catch(e => reject(`error: ${e}`))
                                : axios
                                    .put(`/bounty/${this.state.edit._id}`, this.state.edit)
                                    .then(res => resolve(res.data))
                                    .catch(e => reject(`error: ${e}`))

                    })
                }

            default:
                {
                    console.log('PLEASE SETUP A SWITCH CASE TO HAVE IT', action, props);
                }
        }
    }

    handleChangeEdit = (e) => {
        const {name, value} = e.target
        this.setState(prev => ({
            edit: {
                ...prev.edit,
                [name]: value
            }
        }))
    }

    // RENDER THE PROVIDER
    render() {
        return (
            <Provider
                value={{
                ...this.state,
                ANNOUNCE: this.ANNOUNCE,
                handleChangeEdit: this.handleChangeEdit
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default StateProvider;
export const WithState = (C) => props => <Consumer>
    {value => <C {...value} {...props}></C>}
</Consumer>




