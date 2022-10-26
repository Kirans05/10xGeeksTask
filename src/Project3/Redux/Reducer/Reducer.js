const initialState = []

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "addData":
            return [...state, action.payload]
        
        case "removeData":
            let myStates = state
            myStates.splice(action.index,1)
            return myStates
        
        case "editData":
            let myState = state
            myState[action.index] = action.payload 
            return myState
        

        case "resetState":
            return []

        
        default :
            return state;
    }
}


export default userReducer