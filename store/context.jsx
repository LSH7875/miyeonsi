import {createContext} from 'react' 

const initialState ={
    stage:0,
    number:0,
    background:"class",
    person1:0,
    person2:0,
    option:0,

} 

const Store = createContext(initialState);

export default Store