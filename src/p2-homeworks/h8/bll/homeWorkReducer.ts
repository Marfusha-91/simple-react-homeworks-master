import {UserType} from "../HW8";

type ActionType = {type:'sort', payload: 'up' | 'down'} | {type:'check'}




export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
         let newSort = [...state].sort( function(a, b)  {
                /* if(a.name > b.name)
                  return 1

                else if(a.name < b.name)
                     return -1
                 else return 0*/

             return a.name > b.name ? 1 : a.name < b.name ? -1 : 0

        })

         return action.payload === 'up' ? newSort : newSort.reverse()
        };
        case 'check': {
            // need to fix
            return [...state].filter(el => el.age >= 18)
        }
        default: return state
    }
}