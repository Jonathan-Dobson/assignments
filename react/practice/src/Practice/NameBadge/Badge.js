import React from 'react';
import './badge.css'

export default (props) => <div className='badge'>
    <div className="badge-head">HELLO
        <p>my name is</p>
    </div>
    <div className="badge-body">
        <div className="col">
            <p>Name: {props.badge.fn} &nbsp;
                {props.badge.ln}</p>
            <p>Place of Birth: {props.badge.birthPlace}</p>
            <p>Email: {props.badge.email}</p>
        </div>
        <div className="col">
            <p>Phone: {props.badge.phone}</p>
            <p>Favorite food: {props.badge.favFood}</p>
        </div>
        <p className='description'>{props.badge.description}</p>
    </div>
</div>