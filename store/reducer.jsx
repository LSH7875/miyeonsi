const reducer =(state,action)=>{
    switch(action.type){
        case "plusNumber":
                let number = ++state.number;
            return {...state,number:number}
        case "plusStage":
                let stage = ++state.stage;
            return {...state,stage:stage,number:0}
        default :
            return state;
    }
}

export default reducer