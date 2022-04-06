 import React from 'react';


 import PreJunior from './pages/PreJunior';
 import Junior from './Junior';
 import JuniorPlus from './JuniorPlus';
 import Error404 from "./pages/Error404";
 import {Route, Routes, Navigate} from 'react-router-dom';

 export const PATH = {
     PRE_JUNIOR: '/pre-junior',
     JUNIOR: '/junior',
     JUNIOR_PLUS: '/junior-plus'

 }

 function Routing() {

     // @ts-ignorereturn

 return    (    <div>
             {/*Switch выбирает первый подходящий роут*/}

            <Routes>
                 <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                 <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                 <Route path={PATH.JUNIOR} element={<Junior/>}/>
                 <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                 <Route element={<Error404/>}/>

             </Routes>
         </div> )


 }


 export default Routing

