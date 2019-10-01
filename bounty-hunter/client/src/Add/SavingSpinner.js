import React from 'react';
import { WithState } from '../BountyProvider';
import './rippleEffect.css'

export default WithState((props) => <div className="modal-mask">
    <div className="modal">
        <div className="modal-body align-center">
            <div>
            Saving...
            </div>
            <div className='lds-ripple'><div></div><div></div></div>
        </div>
    </div>
</div>)