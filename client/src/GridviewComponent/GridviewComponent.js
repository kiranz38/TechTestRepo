import React,{Component} from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import axios from 'axios';

function cloneSpaceData(spaceDataRow) {
    return Object.assign({}, spaceDataRow);
  }

export class GridviewComponent extends React.Component{
    constructor(props){
            super(props);
            console.log(props);
    }
    
    state = {
        gridData: this.props.spaceData.map(cloneSpaceData),
        selectedID:null,
        selectedItem : {},
        skip:0,
        take:10,
        arrayCount:[],
        total:this.props.spaceData.count
      };
     
      render(){
          console.log(this.state.gridData);
          console.log(this.props);
          console.log(this.props.clickedEvent);

          if(this.props.clickedEvent === "panel"){
            return  (<Grid  total={this.state.total} style={{height:"500px",width:"100%"}} 
        data={this.props.spaceData.map((item,i) => ({ ...item, ID:i}))
        .sort((spaceElement,nextspaceElement)=>{
            var DateA = new Date(spaceElement.original_launch), DateB = new Date(nextspaceElement.original_launch);
            return DateA - DateB;
        })
        }>
            <Column  field="capsule_id" title="Capsule ID" />
            <Column field="capsule_serial" title="Capsule Serial"/>
            <Column field="details" title="Details" />
            <Column field="status" title="Status" />
            <Column field="original_launch" title="Launch Date" />
           </Grid>);
          }
          else if(this.props.clickedEvent === "pad"){
            return  (<Grid  total={this.props.padData.length} style={{height:"500px"}} 
            data={this.props.padData.map((item,i) => ({ ...item, ID:i}))
            }>
                <Column  field="id" title="ID" />
                <Column field="status" title="Status"/>
                <Column field="status" title="Status" />
                <Column field="attempted_launches" title="Attempted Launch" />
                <Column field="successful_launches" title="Successful Launch" />
                <Column field="site_id" title="Site ID" />
                
                <Column field="site_name_long" title="Site Name" />
               </Grid>);
          }
      
      }
}