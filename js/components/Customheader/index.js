import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Customheader extends Component{
    constructor(props){
        super(props);

    }
    render (){
        return(

            <View style={styles.container}>

            <TouchableOpacity style={{ width:'30%',padding:12}}>     
            <Icon name="chevron-left"  style={{color:'#fff'}} size={24}/>
            </TouchableOpacity>

            <View style={{width:'70%', padding:10,flexDirection:'row'}}>
            <Image source={require('../../images/PNG02.png')} style={{height:40, width:125}}/>
            <Text style={{color:'#fff',padding:10,backgroundColor:'#fff'}}>NEIGHBOURHOOD</Text>
            </View>
            

            </View>

        );
    }
}
export default Customheader;
const styles =StyleSheet.create({
    container:{
        backgroundColor: '#000',
        height:65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%'

    }

});