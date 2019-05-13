import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="parWrap">
            <p>Username: {props.userName}</p>
            <p>{props.userText}</p>
        </div>
    )
};

export default UserOutput;