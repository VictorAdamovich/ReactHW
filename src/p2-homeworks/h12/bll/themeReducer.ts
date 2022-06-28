const CHANGE_THEME = 'CHANGE_THEME';

const initState = {};

type themeReducerType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: themeReducerType): any => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                themeColor: action.payload.themesColor
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (themesColor: string): any => ({
    type: CHANGE_THEME,
    payload: {themesColor}
} as const); // fix any