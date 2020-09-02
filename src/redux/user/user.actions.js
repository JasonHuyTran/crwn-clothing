//functions that return objects

import {UserActionTypes} from './user.types'

//gets the user but returns an action object 
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})