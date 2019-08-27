import React from 'react';
import { WithState } from '../../StateProvider';
import { withRouter } from 'react-router-dom';

const SaveButton = withRouter(({history, announce}) => <button 
    className="button-warning"
    onClick={ ()=>{
            announce('CLICKED SAVE DETECTED POSITION')
            history.push('/daily')
        }
    }>Save and Continue
</button>)



export default WithState(props => <div className="modal-mask">
    <div className="modal">
        <div className="modal-head">Position Found
        </div>
        <div className="modal-body">
            <div>Coordinates: 
                <div className='align-center'>Lat: {props.tempLat}, </div>
                <div className='align-center'>Long: {props.tempLng}</div>
            </div>
            <b>Nearest City:
                <div className='align-center'>
                    {props.tempCity} &nbsp;
                    {props.tempState}  &nbsp;
                    {props.tempCountry} &nbsp;
                </div>
            </b>

        </div>
        <div className="modal-footer">
            <SaveButton announce={props.announce}/>
            <button 
                className=""
                onClick={()=>props.announce('CLICKED DISCARD NEW POSITION')}
            >Discard</button>

        </div>
    </div>
</div>)
