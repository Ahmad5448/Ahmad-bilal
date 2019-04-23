import React, { Component } from "react";
import { TouchableOpacity,StatusBar,View,Modal, TouchableHighlight,StyleSheet,Image,ActivityIndicator } from "react-native";

import { DrawerNavigator, NavigationActions } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,

  Left,
  Body,
  Right,Input,Item,
} from "native-base";


export default class ForgotPassword extends Component {
  static navigationOptions = {
    header: null
}
  constructor(props) {
    super(props);
    this.state = {
      setSpinnerState:false,
      showNewPasswordFields:false,
       email:'',
      showFieldforpasscode:false,
      passcode:'',
      newpassword:'',
      passcode:'',
      // email:''
    };
  }
  checkemail(){

this.setState({setSpinnerState:true})

    axios.post("http://172.104.217.178/blaze10/public/api/password/email",{
      email: this.state.email,
      

    })
    .then((response) => {
      alert(JSON.stringify(response.data))
      if(response.data){
        this.setState({
          setSpinnerState:false,
          showNewPasswordFields:true,

        })
      }
      
})
.catch(error => {
  this.setState({
      setSpinnerState:false
  })
  Alert.alert("",error.message)}

)

  }
  updatevalue(text,field){
if(field==='email'){
  this.setState({
    email:text
  }) 
  

}

else if(field==='passcode'){
  this.setState({
    passcode:text
  }) 
}

else if(field==='newpass'){
  this.setState({
    newpassword:text
  }) 
}
else if(field==='renewpass'){
  this.setState({
    passcode:text
  }) 
}

 }
checkPasscode(){
  alert('hi there')
}
  render() {
    if(this.state.showNewPasswordFields===false){

      return (
        <Container style={styles.container}>
           {/* <Header>
            <Left>
              <Button transparent active onPress={() =>this.props.navigation.navigate('Login') }>
                <Icon name='close' />
              </Button>
            </Left>
            
            <Body style={{backgroundColor:'black'}}>
            <Text style={{color:'#000'}}></Text>
  
            </Body>
          </Header> */}
  
  
  <Header style={{backgroundColor:'#cc9312'}}>
            <Left><Icon name="close" size={22}  onPress={() =>this.props.navigation.navigate('LoginScreen') }/></Left>
            <Body ><Title >FORGOT-PASSWORD</Title></Body>
            <Right>
              <Button transparent>
                
              </Button>
            </Right>
          </Header>
  
  
      
  
         
        <Content>
       
  
          <View style={{paddingLeft:10,paddingRight:10, justifyContent:'center',alignItems:'center'}}>
          <Item > 
              <Icon active name='envelope' size={20} />
              <Input placeholder='enter your email 'placeholderTextColor="#86898e"  onChangeText={(text)=>this.updatevalue(text,'email')}  
               value={this.state.email} />
            </Item>
            <TouchableOpacity style={styles.buttoncontainer} onPress={this.checkemail.bind(this)} >
              <Text style={styles.buttontext} >Go</Text>
          </TouchableOpacity>
          {this.state.setSpinnerState?
         <ActivityIndicator size="large" color="#f39c12" />:null
         }
          </View>
  
           {/* <View style={{paddingLeft:10,paddingRight:10,}}>
          <Item > 
              <Icon active  name="user-tie" />
              <Input placeholder='New Password' placeholderTextColor="#86898e"/>
            </Item>
          </View>
  
           <View style={{paddingLeft:10,paddingRight:10,}}>
          <Item > 
              <Icon active name='globe' />
              <Input placeholder='Re-enter Password' placeholderTextColor="#86898e"/>
            </Item>
          </View> */}
          
          
        </Content>
        
        
        </Container>
      );

    }
    else if(this.state.showNewPasswordFields===true){
      return (
        <Container style={styles.container}>
           
  
  
  <Header style={{backgroundColor:'#f39c12',}}>
            <Left><Icon name="close" size={22}  onPress={() =>this.props.navigation.navigate('Login') }/></Left>
            <Body ><Title >FORGOT-PASSWORD</Title></Body>
            <Right>
              <Button transparent>
                
              </Button>
            </Right>
          </Header>
  
  
      
  
         
        <Content>
       
  
          <View style={{paddingLeft:10,paddingRight:10, justifyContent:'center',alignItems:'center'}}>
          <Item > 
              <Icon active name='key' size={20}/>
              <Input placeholder='enter your passcode'placeholderTextColor="#86898e"  onChangeText={(text)=>this.updatevalue(text,'passcode')}  
                />
            </Item>

            
            <TouchableOpacity style={styles.buttoncontainer} onPress={this.checkPasscode.bind(this)} >
              <Text style={styles.buttontext} >Check</Text>
          </TouchableOpacity>
          {this.state.setSpinnerState?
         <ActivityIndicator size="large" color="#f39c12" />:null
         }
          </View>
  
           {/* <View style={{paddingLeft:10,paddingRight:10,}}>
          <Item > 
              <Icon active  name="user-tie" />
              <Input placeholder='New Password' placeholderTextColor="#86898e"/>
            </Item>
          </View>
  
           <View style={{paddingLeft:10,paddingRight:10,}}>
          <Item > 
              <Icon active name='globe' />
              <Input placeholder='Re-enter Password' placeholderTextColor="#86898e"/>
            </Item>
          </View> */}
          
          
        </Content>
        
        
        </Container>
      );
    }
   
  //   else if(this.state.showNewPasswordFields===true){
  //     return (
  //       <Container style={styles.container}>
           
  
  
  // <Header style={{backgroundColor:'#f39c12',}}>
  //           <Left><Icon name="close" size={22}  onPress={() =>this.props.navigation.navigate('Login') }/></Left>
  //           <Body ><Title >FORGOT-PASSWORD</Title></Body>
  //           <Right>
  //             <Button transparent>
                
  //             </Button>
  //           </Right>
  //         </Header>
  
  
      
  
         
  //       <Content>
       
  
  //         <View style={{paddingLeft:10,paddingRight:10, justifyContent:'center',alignItems:'center'}}>
  //         <Item > 
  //             <Icon active name='key' />
  //             <Input placeholder='enter new password 'placeholderTextColor="#86898e"  onChangeText={(text)=>this.updatevalue(text,'newpass')}  
  //               />
  //           </Item>

  //           <Item > 
  //             <Icon active name='key' />
  //             <Input placeholder='Re-enter your password 'placeholderTextColor="#86898e"  onChangeText={(text)=>this.updatevalue(text,'renewpass')}  
  //               />
  //           </Item>
  //           <TouchableOpacity style={styles.buttoncontainer} onPress={this.checkemail.bind(this)} >
  //             <Text style={styles.buttontext} >Update</Text>
  //         </TouchableOpacity>
  //         {this.state.setSpinnerState?
  //        <ActivityIndicator size="large" color="#f39c12" />:null
  //        }
  //         </View>
  
          
          
  //       </Content>
        
        
  //       </Container>
  //     );
  //   }
    
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  buttoncontainer:
      {
          backgroundColor:'#cc9312',
          paddingVertical: 10,
          marginTop: 10,
          borderColor: '#EE8215',
           borderWidth: 1,
           borderRadius: 8,
           width:"20%",
          
           
      },
      buttontext:
      {
          textAlign:'center',
          color: 'white',
          fontSize:20,
      
      },
})
