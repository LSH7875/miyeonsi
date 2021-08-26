import { useContext, useEffect } from 'react'
import Styled from 'styled-components'
// import Dialog from '../components/Dialog'
import Store from '../store/context' 

const Image = Styled.img`
    display:block;
    color:red;
    position:absolute;
    z-index:1;
    background-size:contain;
    
    @media(max-width:700px){
         /* width:object-fit; */
        min-height:100vh;
    }
    @media(min-width:701px){
        width:100vw;
        min-height:100vh;
    }
`


const list = [
    [
        '1:오늘 좋아!','2:월요일 좋아!','1:네모네모','2:스폰지밥~!'
    ],
    [
        '1:스폰지밥!','뭐하는거지?',
    ]
]
const index =()=>{

    const appClick=()=>{
        dispatch({type:"plusNumber"})
    }

    const appPress=()=>{
        if(keyCode == 13 || keyCode ==32){
            appClick();
        }
    }

    const {dispatch,state} = useContext(Store);
    useEffect(()=>{
        if(state.number===2 && state.stage ===0){
            dispatch({type:"plusStage"})
        }
    },[state.number])

     
    let aa=(state)=>{
        switch(state.background){   
            case "room":
                return ('room.jpg')    
            case "class":
            default :
            return ('class.jpg') 
        }
    }
console.log(aa);
    return (
        <div onClick={appClick} onKeyDown={appPress}>
        {/* <Image src = {aa}/> */}
        <Image src = {aa({state})}/>
        <img src = "/girl.jpg" style = {{position:'absolute', zIndex:'2',left:'50%',transform:'translateX(-50%)'}}/>
        <div style ={{width:'100%',height:'200px',border:'3px solid red',position:'absolute',transform:'translateY(-50%)',textAlign:'center',top:'100%',zIndex:'5',background:'white',borderRadius:'1em'}}>
        {list[state.stage][state.number]}
        </div>
        </div>
    )
}

export default index