import React from 'react';
import {WithState} from './BountyProvider'
import Edit from './Edit/Edit'
import Save from './Edit/SavingSpinner'



export default WithState((props) => {
    
    const ListMapped = () => props.list.map(person =>
        <div key = {person._id}
            className = 'card' 
            style = {{
            width: 700,
            padding: 10,
            margin: '10px auto',
            cursor: 'pointer',
            backgroundColor: person.living===false
                ? 'lightgrey'
                    : person.skill==="Jedi" 
                        ? '#DEFFB2'
                        : person.skill==="Sith"
                            ? 'pink'
                            : 'lightblue',
            color: person.living?'black':'grey'
            }}
            onClick={()=>{
                props.ANNOUNCE('CLICKED EDIT PERSON', person)
            }}> 
            <div className='card-title' style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 2fr 1fr',
            }}>
                <span style={{textAlign: 'left'}}>{person.firstName} {person.lastName}</span>
                <span>{person.skill==='Other'?'':person.skill} </span>    
            <span style={{textAlign: 'left'}}> Bounty : {person.bounty} </span>
            <span style={{textAlign:'right'}}>{person.living?'ALIVE':'DEAD'} </span> 
            </div> 
        </div>)
        
    return (
        <div>
            <ListMapped/>
            {(props.editing||props.creating)&&<Edit person={props.person}/>}
            {props.saving&&<Save person={props.person}/>}
            <button style={{border: 'none'}} onClick={()=>props.ANNOUNCE('CLICKED ADD NEW')}>Add +</button>
        </div>
    )
})