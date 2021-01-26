import React from "react";
import '../App.css';

export default function Buttons({setCount, btns}) {

    const calculationHandler = (event) => {
        const value = +event.target.innerText
        if (event.target.innerText === 'RESET') setCount(0);
        for (const item of btns) {
            if (value === item) setCount(prev => prev + item <= 0 ? prev = 0 : prev += item)
        }
    }

    return (
        <div className="calculations-box">
            {btns.map((el, i) => (<button className='calc-btn' key={i} onClick={calculationHandler}>{el}</button>))}
            <button className='reset' onClick={calculationHandler}>RESET</button>
        </div>

    );
}
