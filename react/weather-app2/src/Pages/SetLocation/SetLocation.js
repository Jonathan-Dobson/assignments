import React from 'react';
import { WithState } from '../../StateProvider';
import axios from 'axios'
import SearchResults from './SearchResults'
import DetectingModal from './DetectingModal'
import DetectedConfirmModal from './DetectedConfirmModal'

class SetLocation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            results: []
        }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value}, ()=>{ 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {value} = e.target.search
        if(value.length > 1){
            // axios.get(`http://127.0.0.1:3006/search/${value}`)
            axios.get(`https://geofinder.fromjon.com/search/${value}`)
            .then(res=>{
                this.setState({
                    search: value,
                    results: res.data.res
                })
            })
        }
    }
    handleSave = (location) => {
        this.props.setLocation(location)
        this.props.history.push('/daily')
    }
    
    render(){
        const {announce, detectingLocationModal, detectedConfirmModal} = this.props
        return(
            <>
            <p>Set a new city</p>
            <button 
                className="button" 
                onClick={ (e)=>{
                    e.preventDefault()
                    this.setState({detecting: true})
                    announce('CLICKED ON DETECT POSITION')}
                } 
                >Detect My position</button>
            <form onSubmit={this.handleSubmit}>
            <input type="text" 
                name="search" 
                id="search" 
                placeholder='Enter City Name' 
                autoComplete='off' 
                autoFocus
                value={this.state.search} 
                onChange={this.handleChange}/>
            <div style={{
                height: 255,
                overflowY: this.state.results.length > 4 ? 'scroll' : 'hidden',
            }}>
            <SearchResults results={this.state.results}/>
            </div>
            <button disabled={this.state.search.length < 2 ? 'disabled' : ''}
                className="button" 
                >Search
            </button> 
            <button 
                className="button" 
                onClick={ ()=>this.props.history.push('/') }>Cancel
            </button> 

            </form>
            {detectingLocationModal ? <DetectingModal /> :''}
            {detectedConfirmModal ? <DetectedConfirmModal /> :''}
        </>)
}
}

export default WithState(SetLocation)
