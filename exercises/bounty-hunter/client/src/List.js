import React from 'react';
import {WithState} from './BountyProvider'

export default WithState((props) => {
    const ListMapped = () => props.list.map(person =>
        <div key = {person._id}
            className = 'card' style = {{
            width: 350,
            margin: '30px auto',
            backgroundColor: person.living===false
                ? 'lightgrey'
                    : person.type==="Jedi" 
                        ? 'lightblue'
                        : person.type==="Sith"
                            ? 'pink'
                            : '#DEFFB2',
            color: 'grey'
            }}> 
            <div className='card-title'>
                <span>{person.type} </span>
                <span>{person.firstName} </span>
                <span>{person.lastName} </span>
            </div> 
            <span> Bounty : {person.bounty} </span>
            <span>{person.living?'STILL ALIVE':'NOW DEAD'} </span> 
        </div>)
    return (
        <div>
            <ListMapped/>
        </div>
    )
})