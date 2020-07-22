import { createStore, combineReducers, compose,applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {GET_SPACE_DATA,SET_SPACE_DATA,GET_PAD_DETAILS} from '../Utils';


const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const reducers = {
    spaceData: (oldState = {}, action) => {
        const { type } = action;
        switch (type) {
            case GET_SPACE_DATA: return action.payload.data;
            
            case SET_SPACE_DATA: return '';
            default:
                return oldState;
        }
    },
    padData : (state={},action)=>{
        const {type} = action;
        switch(type){
            case GET_PAD_DETAILS: return action.payload.data;
            default:
                return state;
        }
    },
    setData:(state={},action)=>{
        const {type} = action;
        switch(type){
            case SET_SPACE_DATA: return action.payload.data;
            default:
                return state;
        }
    },
};

const slices = combineReducers({ ...reducers });



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(slices);

export default store;
