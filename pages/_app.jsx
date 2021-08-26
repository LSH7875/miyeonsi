import Store from '../store/context'
import { useReducer,useContext} from 'react'
import reducer from '../store/reducer'

const App = ({Component,pageProps})=>{
    const globalContext = useContext(Store);
    const [state,dispatch] = useReducer (reducer,globalContext)

    
    return (
        <>
            <Store.Provider value = {{state,dispatch}} >
                <Component {...pageProps}/>
            </Store.Provider>
        </>
    )
}

export default App