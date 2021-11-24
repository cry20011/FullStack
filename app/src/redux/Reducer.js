export const reducer = (state, action)=>{
    if (action.type === 'ADD') {
        const {name, text} = action.placeholder;
        let newState = [...state, {id: Date.now(), name, text}]
        return newState;
    }
    return state;
}