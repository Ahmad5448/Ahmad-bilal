import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Map from '../map';
import Activity from '../activity';
import Mynaber from '../mynaber';
import Profile from '../profile';



const TabNavigator = createBottomTabNavigator({
    Map: { screen: Map,
       navigationOptions : {
            tabBarIcon: () => (
                <Icon name="map-marker" size={22} color={'#fff'}/>
            )
          } 
        },
        Activity: { screen: Activity,
        navigationOptions : {
            tabBarIcon: () => (
                <Icon name="th-list" size={22} color={'#fff'}/>
            )
          } 
     },
     Mynaber: { screen: Mynaber,
        navigationOptions : {
            tabBarIcon: () => (
                <Icon name="users" size={22} color={'#fff'}/>
            )
          }  },
          Profile: { screen: Profile,
        navigationOptions : {
            tabBarIcon: () => (
                <Icon name="user" size={22} color={'#fff'}/>
            )
          }  },
         

             
  },{

    tabBarOptions: {
        activeTintColor:'#444',
        inactiveTintColor: '#fff',
        showLabel: true,
        showIcon: true,
        
        style: {
            backgroundColor: '#f2cb6e',
          }

    }

  }

  );
  
  export default createAppContainer(TabNavigator);

