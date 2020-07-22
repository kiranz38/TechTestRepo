import styled from 'styled-components';

const DisplayPanel = styled.div`
height: 100%;
width:100%;
border: solid 1px;
`;

const PanelContainer = styled.div`
display:flex;
flex-direction:row;
align-content:space-between;
background-color:#4c4c4c;
flex-wrap:wrap;
`;

// {{display:"flex", flexDirection:"row",alignContent:"spaceBetween",backgroundColor:"#4c4c4c" ,flexWrap:"wrap"}}

export {DisplayPanel,PanelContainer};