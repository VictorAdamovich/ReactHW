import React, {useState} from 'react';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './RequestsAPI';
import {Request} from './Request';

export const Hw13 = () => {
    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
    const [correctAnswer, setCorrectAnswer] = useState<string>('');
    const [errorAnswer, setErrorAnswer] = useState<string>('');
    const [error, serError] = useState<boolean>(false);

    const requestMassage = error ? errorAnswer : correctAnswer;

    const buttonOnClickHandle = () => {
        RequestsAPI.changeCheckboxStatus(checkBoxValue)
            .then(res => {
                setCorrectAnswer(res.data.info);
            })
            .catch(error => {
                serError(true);
                setErrorAnswer(error.response ? error.response.data.errorText : error.message)
            });
    };


    return (
        <div>
            <SuperCheckbox checked={checkBoxValue} onChangeChecked={setCheckBoxValue}/>
            <button onClick={buttonOnClickHandle}> Send request</button>
            <Request requestMassage={requestMassage}/>
        </div>
    );
};

