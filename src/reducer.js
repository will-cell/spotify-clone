export const initialState = {
    user: null,
    playlits: [],
    playing: false,
    item: null,
    // token :null,
    token: 'BQASJicmxJ1uJ4Q2xyQ2vMiB12Dt_KowPW37Ie8U35l09D3uZIbHEGWJT1hUZJ9_NcCNOeSzkidt011ek1CsR_gTdr83_kRuQRTcgVZ2UeYSmbG7J39GPVc6T3R2G-BJmImuntD2HrIZjjQMbVsgJAXg3f_3_bGZvMZ1Q3rT5EOZu5GwiMvC', 
    discover_weekly : null
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
        case 'SET_DISCOVER_WEEKLY': 
            return { 
                ...state, 
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }

}
export default reducer; 