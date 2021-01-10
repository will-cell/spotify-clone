export const initialState = {
    user: null,
    playlits: [],
    playing: false,
    item: null,
    token: 'BQATkqU9B4y4fxxKWEbijm1Y7amnMUumd_ofVf7-dg9LuDh6hbHFehNLGGx7ZF08kYOB1uNvM3Yz1vPfx8f2lB-tUOEdhKrrmpE57B9uDX_pwAgU49dE545mUgCaYxcym87S4W2_pu_dNR-5rx4O437hC4keui-hPvRtpYu8cTXhUozH5GcB', 
}; 

const reducer = (state, action) => {
    console.log('the action', action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN': 
            return { 
                ...state, 
                token: action.token
            }
        case 'SET_PLAYLISTS': 
            return { 
                ...state, 
                playlists: action.play
            }
        default:
            return state;
    }

}
export default reducer; 