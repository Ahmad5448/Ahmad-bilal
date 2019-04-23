import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';

export default class Editprofile extends Component {
  static navigationOptions = {
    header: null}
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#cc9312'}}>
          <Left>
            <Button transparent onPress={() =>this.props.navigation.navigate('Profile')}>
              <Icon name='chevron-left'  size={20} color={'#fff'}/>
            </Button>
          </Left>
          <Body>
          <Image source={require('../../images/PNG02.png')} style={{height:60, width:150}}/>

            {/* <Title>Header</Title> */}
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button> */}
          </Right>
        </Header>
        {/* <Content style={{backgroundColor:'#f2cb6e'}}>

        </Content> */}
    <Content style={{backgroundColor:'#f2cb6e'}}>         
        

   
      
      
      <View style={{justifyContent:'center',alignItems:'center',marginTop:50,padding:10}}>
    <View style={{ width: '90%',backgroundColor:'#b9994c', borderRadius:10,elevation:2,borderWidth:1,borderColor:'#b9994c',
    }}> 
    
    <View style={{paddingTop:10,textAlign:'center'}}> 
        <Text style={{fontSize:22,textAlign:'center',fontWeight:'bold',paddingTop:10,color:'yellow'}}>
           Edit Profile
        </Text>
    </View>
     <Form style={{paddingTop:30,alignItems:'center',padding:20}}>
     
          <Item regular style={{backgroundColor:'#fff',borderRadius:6,width:'90%'}}>
          <Icon active name='user' size={22} style={{marginLeft:5}}/>
            <Input placeholder="USER NAME" 
            // onChangeText={(text)=>this.updatevalue(text,'email')} value={this.state.email} 
            />
          </Item>

          <Item regular style={{backgroundColor:'#fff',borderRadius:6,width:'90%',marginTop:10,}}>
          <Icon active name='envelope' size={22} style={{marginLeft:5}}/>
            <Input placeholder="EMAIL" 
            // onChangeText={(text)=>this.updatevalue(text,'email')} value={this.state.email} 
            />
          </Item>
          <Item regular style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%' }}>
          <Icon active name='lock' size={22} style={{marginLeft:5}} />
            <Input placeholder="PASSWORD" 
            // onChangeText={(text)=>this.updatevalue(text,'pass')} value={this.state.password} 
            />
          </Item>

          <Item regular style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%' }}>
          <Icon active name='phone' size={22} style={{marginLeft:5}} />
            <Input placeholder="CELL PHONE" 
            // onChangeText={(text)=>this.updatevalue(text,'pass')} value={this.state.password} 
            />
          </Item>
          <Item regular style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%' }}>
          <Icon active name='map-marker' size={22} style={{marginLeft:5}} />
            <Input placeholder="SELECT LOCATION" 
            // onChangeText={(text)=>this.updatevalue(text,'pass')} value={this.state.password} 
            />
          </Item>


          
          
      
      <TouchableOpacity style={styles.buttoncontainer} 
                  //  onPress={this.loginUser.bind(this) }
                 >
               {/* <Text style={styles.buttontext}>Log In</Text> */}

      <View style={{flexDirection:'row',width:"50%",justifyContent:'center'}}>
          <Text style={styles.buttontext}>Save</Text>
          
     <ActivityIndicator size="small" color="white" style={{marginLeft:40}}/>
     </View>
      </TouchableOpacity>
        </Form>
        
      

        </View>
        </View>
      </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  logincontainer:{
      backgroundColor: '#f39c12',
     
      
  },
  signupheader: {
    
    alignItems: 'center',
    backgroundColor: 'transparent',
    height:"31%",
    
  },
  logocontainer:
  {   
    // height:10,
    // marginTop:37
  },
 
  formPadding:{
      padding: 20,
      marginTop: 30,
  },
  input:
  {
      height:40,
      backgroundColor:'#f39c12',
      marginTop: 10, 
      paddingHorizontal: 10,
      color:'#fff',
      fontSize:20,
      borderColor: '#0000',
      
  
      // border-bottom: none,
  },
  buttoncontainer:
  {
      backgroundColor:'#3dc154',
      paddingVertical: 10,
      
      marginTop: 10,
      borderColor: '#3dc154',
       borderWidth: 1,
       borderRadius: 8,
       width:"90%",
       alignItems:'center',
       justifyContent:'center',
       
  },
  buttontext:
  {
      textAlign:'center',
      color: '#fff',
      fontSize:20,
  
  },
  footer:
  {
      position: 'absolute',
      marginTop: 20,
       left: 0, 
       right: 0,
       alignItems: 'center', 
       bottom: 0,
       height:50,
       backgroundColor:'#f39c12',

  },
  border: {
      borderWidth:0.5,
      borderColor:'#ffda79',
      width:'100%',
    
  }
});
