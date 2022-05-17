import React from 'react';
import Error404 from '../h5-rrd-v6/pages/Error404';
import PreJunior from '../h5-rrd-v6/pages/PreJunior';
import {Route, Routes} from 'react-router-dom';
import {Junior} from '../h5-rrd-v6/pages/Junior';
import {JuniorPlus} from '../h5-rrd-v6/pages/JuniorPlus';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_plus: '/junior+',
};

function Rout() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'}  element={<PreJunior/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_plus} element={<JuniorPlus/>}/>
                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path='*' element={<Error404/>}/>

            </Routes>
        </div>
    );
}

export default Rout;
