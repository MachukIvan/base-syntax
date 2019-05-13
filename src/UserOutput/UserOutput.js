import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="parWrap">
            <p>{props.secondPar}</p>
            <p>{props.firstPar}</p>
            <span>Username: {props.userName}</span>
        </div>
    )
};

export default UserOutput;