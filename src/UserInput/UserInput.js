import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="inputWrap">
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default UserInput;