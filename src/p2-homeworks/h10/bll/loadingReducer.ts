export const IS_LOADING = 'IS_LOADING'

const initState = {
    isLoading: false
}

type IsLoadingAT = { type: typeof IS_LOADING }
export type ActionType = IsLoadingAT

type initialStateType = {
    isLoading: boolean
}

export const loadingReducer = (state:initialStateType = initState, action: ActionType): initialStateType => { // fix any
    switch (action.type) {
        case 'IS_LOADING': {
            return {...state, isLoading: !state.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (): IsLoadingAT => {
    return {
        type: IS_LOADING
    }
} // fix any