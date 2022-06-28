import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red','blue', 'some'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.theme.themeColor); // useSelector
    const dispatch = useDispatch();

    // useDispatch, onChangeCallback

    const onChangeCallback = (option: string) => dispatch(changeThemeC(option));


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio value={theme} options={themes} onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
