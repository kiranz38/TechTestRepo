import React,{Fragment, useEffect, useState} from 'react';
import { DisplayPanel ,PanelContainer} from './panelstylecomponent';
import {Button,Input} from 'antd';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import {GridviewComponent} from '../GridviewComponent';
import {useSelector,useDispatch} from 'react-redux';
import {getSpaceDataAction,setSpaceDataAction,getPadDetailAction} from '../actions';



  const PanelComponent = (props) => {

    const spaceData = useSelector(state => state.spaceData);
    const padData = useSelector(state=> state.padData);
    const dispatch = useDispatch();
    const [panelState,setPanelState] = useState({stateData:useSelector(state => state.spaceData)});
    const [padState,setPadState] = useState({padData:[]});
    const [textValue,setTextValue] = useState(1);
    const [clickedEvent,setClickedEvent] = useState("panel");
    const buttonStyle = {margin:"1rem",height:"3rem",alignItems:"center"};
    const textStyle = {width:"20%",margin:'1rem'};
    const formStyle = {backgroundColor:"#323232",textAlign:"center"};

    const setPanelFinalState = ()=>{
      if(spaceData.length > 0){
        dispatch(setSpaceDataAction(spaceData));
        setPanelState({stateData:[...spaceData]});
        setClickedEvent("panel");
      }
      
    }

    const setPadFinalState = () =>{
      if(padData.length > 0){
        setPadState({padData : [...padData]});
        setClickedEvent("pad");
      }
    }
    const submitForm = () => {
      dispatch(getPadDetailAction(textValue));
      setPadFinalState();
    }

    useEffect(()=>{
      dispatch(getSpaceDataAction());
    },[]);
    

   
    const finalData = panelState.stateData.length > 0 ? panelState.stateData : [];
    const padFinalData = padState.padData.length > 0 ? padState.padData : [];
    
    console.log(spaceData);
    console.log(spaceData.length);

    console.log(padData);
    console.log(padData.length);
    

   
      return (
        <Fragment>
        <GridviewComponent spaceData={finalData} padData={padFinalData} clickedEvent={clickedEvent} />
        <PanelContainer>
        <Button style={buttonStyle} onClick={()=>{dispatch(getSpaceDataAction());setPanelFinalState();}} type="primary">Capsules</Button>
        <Rocket style={buttonStyle} />

        <form onSubmit={submitForm} style={formStyle}>
        <Input placeholder="text" onChange={(e)=>{
          setTextValue(Number(e.target.value))
        }} value={textValue} style={textStyle} required/>
        <Button type="primary" style={buttonStyle} onClick={()=>{
          dispatch(getPadDetailAction());
          setPadFinalState();
        }} >Landing Pad</Button>
        </form>
        </PanelContainer>
        </Fragment>);
   
}

export default PanelComponent;