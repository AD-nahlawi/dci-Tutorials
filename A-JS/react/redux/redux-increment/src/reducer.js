const initialState = {
    x : 0 ,
    y : 0
};

export default function reducer (state = initialState, action){
    switch(action.type){
        case 'INCREMENT_Y':

            console.log(state);
            return {
                // x : state.x + 1,
                // y : state.y
                y : state.y + 1,
                x : state.x,

            }
        case 'INCREMENT_X':

            console.log(state);
            return {
                 x : state.x + 1,
                 y : state.y
                // x : state.x,
                // y : state.y + 1
            }
            default:
                return state;
    }
};
