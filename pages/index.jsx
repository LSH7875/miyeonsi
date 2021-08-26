import { useContext, useEffect } from 'react'
import Styled from 'styled-components'
// import Dialog from '../components/Dialog'
import Store from '../store/context' 

const Image = Styled.img`
    display:block;
    color:red;
    position:absolute;
    z-index:1;
    background-size:cover;
    overflow-y: hidden;
    width:100vw;
    height:100vh;
    object-fit:fill;
    
    /* width:100vw;
    min-height:100vh; */
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
        <div onClick={appClick} onKeyDown={appPress} style ={{width:'100vw',height:'100vh' }}>
        {/* <Image src = {aa}/> */}
        <Image src = {aa({state})}/>
        <img src = "/girl.jpg" style = {{position:'absolute', top:'10%', width:'50%',height:'70%',objectFit:'fill',zIndex:'9',left:'100%',transform:'translateX(-100%)'}}/>
        <img src = "/girl.jpg" style = {{position:'absolute', top:'10%', width:'50%',height:'70%',objectFit:'fill',zIndex:'3',left:'0%'}}/>
        <div style ={{width:'100%',height:'14%', paddingTop:'3%', paddingBottom:'3%',border:'3px solid red',position:'absolute',transform:'translateY(-100%)',textAlign:'center',top:'100%',zIndex:'10',background:'white',borderRadius:'1em'}}>
        {list[state.stage][state.number]}
        </div>
        </div>
    )
}

export default index