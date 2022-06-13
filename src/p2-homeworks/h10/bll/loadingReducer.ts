const SET_LOADING = 'SET-LOADING';
type InitStateType = {
    load: boolean
}

const initState: InitStateType = {
    load: false
};

export type LoadingReducerACType = ReturnType<typeof loadingAC>


export const loadingReducer = (state = initState, action: LoadingReducerACType): InitStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                load: !state.load
            };
        }
        default:
            return state;
    }
};

export const loadingAC = () => ({type: SET_LOADING}) as const; // fix any