import {UserType} from '../HW8';

type homeWorkACType= ReturnType<typeof sortUpAc>|ReturnType<typeof sortDownAc>|ReturnType<typeof checkAgeAc>


export const homeWorkReducer = (state: UserType[], action: homeWorkACType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1);
            } else {
                return [...state].sort((a, b) => a.name > b.name ? -1 : 1);
            }
        }
        case 'check': {
            // need to fix
            return state.filter((el: UserType) => el.age >= action.payload);
        }
        default:
            return state;
    }
};

export const sortUpAc = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const;
};

export const sortDownAc = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const;
};

export const checkAgeAc = () => {
    return {
        type: 'check',
        payload: 18
    } as const;
};