import Styled from 'styled-components'
// import Dialog from '../components/Dialog'

const Image = Styled.img`
    color:red;
    
    
    
`



const index =()=>{
    let aa="/class.jpg";
    return (
        <>
        <Image src = {aa} style ={{position:'absolute', zIndex:'1', backgroundSize:'contain',width:'100vw',
    height:'100vh'}}/>
        <img src = "/girl.jpg" style = {{position:'absolute', zIndex:'2',left:'50%',transform:'translateX(-50%)'}}/>
        <div style ={{width:'100%',height:'200px',border:'3px solid red',position:'absolute',transform:'translateY(-50%)',textAlign:'center',top:'100%',zIndex:'5',background:'white',borderRadius:'1em'}}>
            이럴수가!
        </div>
        </>
    )
}

export default index;