import React from 'react';
import {GET_SPACE_DATA,SET_SPACE_DATA,GET_PAD_DETAILS} from '../Utils';

import axios from 'axios';

const getURL = 'https://api.spacexdata.com/v3/';
const getDBData = "http://localhost:4000/setSpaceData";
const getPadDetails = "https://api.spacexdata.com/v3/"

export function getSpaceData(){
    const ax = axios.create({
        baseURL : getURL
    });
    var payLoadData = ax.get('/capsules');

    return {
        type: GET_SPACE_DATA,
        payload: payLoadData
    };
}

export function setSpaceData(spaceData){
    
    const payloadUnit = axios.post(getDBData,spaceData,{headers:{"content-type":"application/json","Access-Control-Allow-Origin": "*"}});
    return {
        type: SET_SPACE_DATA,
        payload: payloadUnit
    }
}

export function getPadDetail(id=1){
    const ax = axios.create({
        baseURL : getPadDetails
    });
    var padData = ax.get('/launchpads',{params:{site_id:id}});

    return {
        type: GET_PAD_DETAILS,
        payload: padData
    };
}