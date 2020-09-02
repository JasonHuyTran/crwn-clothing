//functions that return objects

//returns an action object specifically
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})