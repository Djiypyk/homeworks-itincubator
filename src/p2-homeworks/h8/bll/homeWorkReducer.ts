import {ActionType, UserType} from "./tests/homeWorkReducer.test";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortByName: UserType[] = [...state]
            if (action.payload === 'up') {
                return sortByName.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return sortByName.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return sortByName
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}