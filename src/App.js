import React, {Component} from 'react';
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from '../src/reducers/Reducers';
import { Navigation } from 'react-native-navigation';
import R from './res/R'
import Application from '../src/actions/actions'

const midleWare = applyMiddleware(thunk)(createStore);
const reducers = combineReducers(reducer);
const store = midleWare(reducers);

export default class App extends Component{
    constructor(props){
        super(props);
        Navigation.events().registerAppLaunchedListener(()=>{
            Navigation.setDefaultOptions({
                topBar:{
                    visible:false,
                    height:0
                },
                bottomTabs:{
                    titleDisplayMode:'alwaysShow'
                },
                bottomTab:{
                    textColor:R.color.white,
                    selectedIconColor:R.color.textSelect,
                    selectedIconColor:R.color.textSelect

                },
                layout:{
                    orientation:['portrait']
                }

            })
            
        });
        store.subcribe();
        store.dispatch(Application.initApp());
        
    }
    startApp(){

    }
    
}