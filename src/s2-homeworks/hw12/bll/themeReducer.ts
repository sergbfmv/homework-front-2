import { createStore, combineReducers } from 'redux';

const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: Actionstype): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any


export type StateType = {
    themeId: number
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>
type Actionstype = ChangeThemeIdType






const rootReducer = combineReducers({
    // ...other reducers
    theme: themeReducer,
});

export type RootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
