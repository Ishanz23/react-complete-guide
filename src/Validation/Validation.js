import React from 'react';
import './Validation.css';

const Validation = (props) => {
    let message = props.funLength < 5 ? 'Not enough fun!' : 'Beautiful!';
    return (
        <div className="Validation">
            <p>{message}</p>
        </div>
    );
};

export default Validation;