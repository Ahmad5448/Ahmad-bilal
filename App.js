/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './js/components/loginscreen';
import SignupScreen from './js/components/signupscreen';
import Editprofile from './js/components/editProfile';
import TabNavigator from './js/components/bottomnavigation';
import AccomodationHome from './js/components/accomodation';
import NeibhourhoodAdvisor from './js/components/neibhourhoodadvisor';
import Community from './js/components/community';
import Foods from './js/components/foods';
import Entertaiment from './js/components/Entertainment';
import News from './js/components/news';
import Weather from './js/components/weather';
import Publish from './js/components/publish';
import ForgotPassword from './js/components/forgotpassword';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const RootStack = createStackNavigator({
  LoginScreen:{
screen:LoginScreen
  },
  SignupScreen:{
    screen:SignupScreen
      },

      Editprofile:{
        screen:Editprofile
          },
          AccomodationHome:{
            screen:AccomodationHome
          },
          NeibhourhoodAdvisor:{
            screen:NeibhourhoodAdvisor
          },
          Community:{screen:Community},
          Foods:{screen:Foods},
          Entertaiment:{screen:Entertaiment},
          News:{screen:News},
          Weather:{screen:Weather},
          Publish:{screen:Publish},
          ForgotPassword:{screen:ForgotPassword},


  TabNavigator:{
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  
},
{
  navigationOptions: {
   header:null
   }
 });

const App = createAppContainer(RootStack);

export default App;
