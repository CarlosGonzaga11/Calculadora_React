import React from 'react';
import './display.css';

function Display(props) {
    return (
        <div className="container-display">
            <div className="campo-digitado">

                <input placeholder='digite sua equação...'>{props.num}</input>
            </div>
        </div>
    );






}

export default Display;