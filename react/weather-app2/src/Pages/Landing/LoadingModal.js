import React from 'react';
import { WithState } from '../../StateProvider';
import './rippleEffect.css'

export default WithState(({history, announce}) => <div className="modal-mask">
<div className="modal">
    <div className="modal-head">Loading Weather...
    </div>
    <div className="modal-body align-center">
        <div className='lds-ripple'><div></div><div></div></div>
    </div>
    <div className="modal-footer">
        {/* <button className=""
            onClick={()=>{
                announce('DETECTING WEATHER CANCELED')
            }}
        >Cancel</button> */}
    </div>
</div>
</div>)






