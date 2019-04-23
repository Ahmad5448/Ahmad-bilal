import React, { Component } from 'react';
import { View, Text,Image,StyleSheet ,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,List, ListItem,CheckBox
 } from 'native-base';
 import Modal from "react-native-modal";

 import Icon from 'react-native-vector-icons/FontAwesome';

export default class Mynaber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changetabs:false
    };
  }
  mynaber(){
      this.setState({changetabs:false})
  }
  nearNaber(){
    this.setState({changetabs:true})
  }
  render() {
    if(this.state.changetabs===false){
    return (
      <Container>

      <Header style={{height:70,backgroundColor:'#cc9312',width:'100%',flexDirection:'row',justifyContent: 'space-between',}}>
        <View style={{justifyContent:'center',alignItems: 'center',width:'65%'}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:14}}>NEIBHOURHOOD NEAR YOU</Text>
        </View>
        <View style={{justifyContent:'center',width:'50%'}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:14}}>(0 Members)</Text>
        </View>

      </Header>
      
      <Content >

        <View style={{padding:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>

        <TouchableOpacity style={{backgroundColor:'#d9d9dd',width:'50%',justifyContent:'center',alignItems:'center',paddingVertical:10,
            borderTopLeftRadius:10,borderBottomLeftRadius:10,}} onPress={this.mynaber.bind(this)}>
          <Text style={{color:'#e0283a'}}>My naber</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{backgroundColor:'#79797c',width:'50%',justifyContent:'center',alignItems:'center',paddingVertical:10,
            borderTopRightRadius:10,borderBottomRightRadius:10,}} onPress={this.nearNaber.bind(this)}>
          <Text style={{color:'#fff'}}>Near by naber</Text>
        </TouchableOpacity>

        </View>
        <List>
            <ListItem avatar style={{borderBottomWidth:1,borderColor:'#cc9312',borderTopWidth:0,padding:0}}>
              <Left>
              <Icon name="users" size={25} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              
            </ListItem>
            <ListItem avatar style={{borderBottomWidth:1,borderColor:'#cc9312',borderTopWidth:0,padding:0}}>
              <Left>
              <Icon name="user" size={25} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              
            </ListItem>
          </List>
      </Content>
      </Container>
    );
    }
    else if(this.state.changetabs===true){
      return (
        <Container>
  
        <Header style={{height:70,backgroundColor:'#cc9312',width:'100%',flexDirection:'row',justifyContent: 'space-between',}}>
          <View style={{justifyContent:'center',alignItems: 'center',width:'65%'}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:14}}>NEIBHOURHOOD NEAR YOU</Text>
          </View>
          <View style={{justifyContent:'center',width:'50%'}}>
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:14}}>(0 Members)</Text>
          </View>
  
        </Header>
        
        <Content >
  
          <View style={{padding:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
  
          <TouchableOpacity style={{backgroundColor:'#79797c',width:'50%',justifyContent:'center',alignItems:'center',paddingVertical:10,
              borderTopLeftRadius:10,borderBottomLeftRadius:10,}} onPress={this.mynaber.bind(this)}>
            <Text style={{color:'#fff'}}>My naber</Text>
          </TouchableOpacity>
  
  
          <TouchableOpacity style={{backgroundColor:'#d9d9dd',width:'50%',justifyContent:'center',alignItems:'center',paddingVertical:10,
              borderTopRightRadius:10,borderBottomRightRadius:10,}} onPress={this.nearNaber.bind(this)}>
            <Text style={{color:'#e0283a'}}>Near by naber</Text>
          </TouchableOpacity>
  
          </View>
          <List>
              <ListItem avatar style={{borderBottomWidth:1,borderColor:'#cc9312',borderTopWidth:0,padding:0}}>
                <Left>
                <Icon name="users" size={25} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                <CheckBox checked={true} color={'#cc9312'}/>
                </Right>
              </ListItem>
              <ListItem avatar style={{borderBottomWidth:1,borderColor:'#cc9312',borderTopWidth:0,padding:0}}>
                <Left>
                <Icon name="user" size={25} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                <CheckBox checked={true} color={'#cc9312'} />
                </Right>
              </ListItem>
            </List>
        </Content>
        </Container>
      );
      }
  }
}
