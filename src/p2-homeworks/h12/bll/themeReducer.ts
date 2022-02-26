const CHANGE_THEME = 'CHANGE-THEME'

const initState = {
    theme: 'some'
};

type initialStateType = {
    theme: string
}
type ChangeThemeAT = { type: typeof CHANGE_THEME, theme: string }

type ActionType = ChangeThemeAT


export const themeReducer = (state: initialStateType = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME : {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): ChangeThemeAT => {
    return {type: CHANGE_THEME, theme}
};