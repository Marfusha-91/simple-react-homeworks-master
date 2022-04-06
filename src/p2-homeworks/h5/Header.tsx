 import  React from 'react'
 import {PATH} from "./Routes";
 import {NavLink} from "react-router-dom";import s from './Header.module.css'

 function Header() {
     return (<div >

         <div className={s.header}>
         <input type="checkbox" id="hmt" className={s.hiddenmenuticker}/>
         <label className={s.btnMenu} htmlFor="hmt">
             <span className={s.first}></span>
             <span className={s.second}></span>
             <span className={s.third}></span>
         </label>



         <div className={s.menu}><NavLink to={PATH.PRE_JUNIOR} className={s.style}>pre-junior </NavLink>
             <NavLink to={PATH.JUNIOR} className={s.style} >junior  </NavLink>
             <NavLink to={PATH.JUNIOR_PLUS} className={s.style} >junior_plus  </NavLink>


         </div></div>
         </div>  )
 }

 export default Header

