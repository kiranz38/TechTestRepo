import React from 'react';
import {getSpaceData,setSpaceData,getPadDetail} from '../services';

const getSpaceDataAction = () => {
    return getSpaceData();
}

const setSpaceDataAction = (spaceData) => {
   return setSpaceData(spaceData);
}

const getPadDetailAction = (id=1) =>{
    return getPadDetail(id);
}

export {getSpaceDataAction,setSpaceDataAction,getPadDetailAction};