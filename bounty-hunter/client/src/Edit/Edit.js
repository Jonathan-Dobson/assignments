import React from 'react';
import {WithState} from '../BountyProvider'


export default WithState((props) => {
    const {firstName,lastName,bounty,skill,living} = props.edit
    return (
        <div className="modal-mask">
            <div className="modal">
                <div className="modal-head">Edit Person</div>
                <div className="modal-body">
                    <form name='edit-form'>
                        <div
                            style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 2fr 1fr',
                            marginBottom: 4
                        }}>
                            <label htmlFor="firstName" className='align-left'>First Name:
                                <input type='text' name='firstName' 
                                onChange={props.handleChangeEdit}
                                value={firstName}/>
                            </label>

                            <label htmlFor="lastName" className='align-left'>Last Name:
                                <input type='text' name='lastName' 
                                onChange={props.handleChangeEdit}
                                value={lastName}/>
                            </label>

                            <label htmlFor="bounty" className='align-left'>Bounty:
                                <input type='text' name='bounty' 
                                onChange={props.handleChangeEdit}
                                value={bounty}/>
                            </label>
                        </div>
                        <label htmlFor='skill'
                            style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
                        }}>
                            Skill:
                            <button className={skill==='Jedi'?'button-green':''} 
                                onClick={(e)=>{
                                    e.preventDefault()
                                    props.ANNOUNCE('CLICKED EDIT SKILL','Jedi')
                                }}>Jedi</button>
                            <button className={skill==='Sith'?'button-pink':''}
                            onClick={(e)=>{
                                    e.preventDefault()
                                    props.ANNOUNCE('CLICKED EDIT SKILL','Sith')
                                }}>Sith</button>
                            <button className={skill==='Other'?'button-blue':''}
                            onClick={(e)=>{
                                    e.preventDefault()
                                    props.ANNOUNCE('CLICKED EDIT SKILL','Other')
                                }}>Other</button>
                            <div></div>
                        </label>
                        <label htmlFor='living'
                            style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
                        }}>
                            Living:
                            <button className={living?'button-blue':''} 
                                onClick={(e)=>{
                                    e.preventDefault()
                                    props.ANNOUNCE('CLICKED EDIT TO ALIVE')
                                }}>Alive</button>
                            <button className={!living?'button-blue':''}
                            onClick={(e)=>{
                                    e.preventDefault()
                                    props.ANNOUNCE('CLICKED EDIT TO DEAD')
                                }}>Dead</button>
                            <div></div>
                        </label>
                        <label htmlFor='remove'
                            style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr'
                        }}>
                            <div></div>
                            
                            <button className={props.deleting?'button-danger':''} 
                                onClick={(e)=>{
                                    e.preventDefault()
                                    if(props.deleting){
                                        props.ANNOUNCE('CLICKED EDIT UNDELETE')
                                    }else{
                                        props.ANNOUNCE('CLICKED EDIT DELETE')
                                    }
                                }}>Delete</button>
                            <div></div>
                        </label>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={(e)=>{
                        e.preventDefault()
                        props.ANNOUNCE('CLICKED CANCEL EDIT')
                    }}>Cancel</button>
                    <button className='button-primary'
                        onClick={(e)=>{
                        e.preventDefault()
                        props.ANNOUNCE('CLICKED SAVE EDIT')
                    }} >Save</button>

                </div>
            </div>
        </div>
    )
    
})
