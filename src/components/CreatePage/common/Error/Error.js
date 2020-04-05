import React from 'react';
import s from './error.module.scss';

const ErrorForm = ({ error, setError }) => {
    return (
        <div className={error ? s.showError : s.error}>
            <span className='material-icons'>error</span>
            <h3>Please, fill the forms</h3>
            <span className={`material-icons ${s.closeError}`}
                  onClick={() => setError(false)}
            >highlight_off</span>
        </div>
    )
}

export default ErrorForm;