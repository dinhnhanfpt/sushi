import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { Navigation } from 'react-native-navigation';
import R from './res/R'
import { Store } from 'react-native-navigation/lib/dist/components/Store';
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
    }
    
}