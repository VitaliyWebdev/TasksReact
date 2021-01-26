import React from "react";
import '../App.css';

export default function Result({count}) {
    return (
        <div className='main-calc-box'>
            <div className='result'>
                {count > 0 ? count : count}
            </div>
            <h1>Calculator</h1>

        </div>
    );
}


