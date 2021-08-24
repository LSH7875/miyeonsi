import Styled from 'styled-components'
import Dialog from '../components/Dialog'

const Image = Styled.div`
    color:red;
    width:100vw;
    height:100vh;
    background:lightgreen;
`



const index =()=>{
    const dialog={
        position:"absolute",
        zIndex:"2",
        top:"10vh",
        width:"100%",
        height:"20vh",
        backgroundColor:"blue"
        // "border":"5px",
        // "borderColor":"red",
        // "boxSizing":"borderbox"
    }
    return (
        <>
        <Image>image</Image>
        <Dialog style ={{dialog}}/>
        </>
    )
}

export default index;