
import * as React from 'react'
import s from './Greeting.module.css'
import {ChangeEvent} from "react";
import {KeyboardEvent} from 'react'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number// need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div><input value={name} onChange={setNameCallback}
                        className={inputClass}
                        onKeyPress={onKeyPressHandler}


            />
                <div className={s.error}>{error}</div>
            </div>
            <button className={s.classButton} onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
