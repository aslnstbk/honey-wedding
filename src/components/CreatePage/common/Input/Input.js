import React from 'react';
import s from './input.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, func, error }) => {

    const [focus, setFocus] = useState(false);
    const [text, setText] = useState();

    const setFunc = e => {
        if(e === '' || e === undefined){
            setFocus(false);
            setText(undefined);
        } else {
            setFocus(true);
            func(e)
            setText(e)
        }
    }

    const blur = () => {
        if(text === '' || text === undefined){
            setFocus(false);
        } else {
            setFocus(true);
        }
    }

    return (
        <div className={focus ? s.focusedInput : error ? s.errorInput : s.input} 
             onFocus={() => setFocus(true)} onBlur={blur}
        >
            <span>{placeholder}</span>
            <input type={type} alt={placeholder} onChange={e => setFunc(e.target.value)} />
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
}

export default Input;