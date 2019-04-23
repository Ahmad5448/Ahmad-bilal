import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator,} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import axios from 'axios';
 
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null}

    constructor(props) {
      super(props);
      this.state = {
        
        email:'ahmadbilal5448@gmail.com',
        password:'Ahmad',
        phoneNumber:'0325448193',
        ActivityIndicator:false,
        
      };
    }

    updatevalue(text,field)
    {
        
        if(field==='email'){
          this.setState({email:text})
        }
        else if(field==='pass'){
          this.setState({password:text})
        }
        else if(field==='no'){
          this.setState({phoneNumber:text})
        }

        
    }
    loginUser(){
      this.setState({ActivityIndicator:true})
      axios.post("http://172.104.217.178/neighborhood/public/api/user_login",{
       
        email:this.state.email,
        phone:this.state.phoneNumber,
        password:this.state.password,
        
      })
      .then((response) => {
        //alert(JSON.stringify(response));
        if(response.data){

        
         this.setState({
          ActivityIndicator:false,
          userName:'',
          email:'',
          phoneNumber:'',
          password:'',
          
         })
         this.props.navigation.navigate('TabNavigator') 
          //alert(JSON.stringify(this.state.country))
        }
      })
      .catch((error) => {this.setState({
        ActivityIndicator:false,
         
          email:'',
          phoneNumber:'',
          password:'',
         
      })
      alert(error);
    });   
    // 
    }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#cc9312'}}>
          <Left>
            <Button transparent>
              <Icon name='chevron-left'  size={20} color={'#fff'}/>
            </Button>
          </Left>
          <Body>
          <Image source={require('../../images/PNG02.png')} style={{height:60, width:150}}/>

            {/* <Title>Header</Title> */}
          </Body>
          <Right>
           
          </Right>
        </Header>
        {/* <Content style={{backgroundColor:'#f2cb6e'}}>

        </Content> */}
    <Content style={{backgroundColor:'#f2cb6e'}}>         
        

   
      
      
      <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
    <View style={{ width: '90%',backgroundColor:'#b9994c', borderRadius:10,elevation:2,borderWidth:1,borderColor:'#b9994c',
    marginVertical:6,}}> 
    
    <View style={{paddingTop:10,textAlign:'center'}}> 
        <Text style={{fontSize:22,textAlign:'center',fontWeight:'bold',paddingTop:10,color:'yellow'}}>
            LOGIN TO YOUR ACCOUNT
        </Text>
    </View>
     <Form style={{paddingTop:30,alignItems:'center',}}>
     
          <Item regular style={{backgroundColor:'#fff',borderRadius:6,width:'90%'}}>
          <Icon active name='envelope' size={22} style={{marginLeft:5}}/>
            <Input placeholder="EMAIL" 
             onChangeText={(text)=>this.updatevalue(text,'email')} value={this.state.email} 
             />
          </Item>
          <Item regular style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%' }}>
          <Icon active name='lock' size={22} style={{marginLeft:5}} />
            <Input placeholder="PASSWORD" 
            onChangeText={(text)=>this.updatevalue(text,'pass')} value={this.state.password} 
            />
          </Item>

          <Item regular style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%' }}>
          <Icon active name='phone' size={22} style={{marginLeft:5}} />
            <Input placeholder="CELL PHONE" 
             onChangeText={(text)=>this.updatevalue(text,'no')} value={this.state.phoneNumber} 
             />
          </Item>
          <TouchableOpacity style={styles.buttoncontainer} 
                    onPress={this.loginUser.bind(this) }
                 >
               {/* <Text style={styles.buttontext}>Log In</Text> */}

      <View style={{flexDirection:'row',width:"50%",justifyContent:'center'}}>
          <Text style={styles.buttontext}>LogIn</Text>
          {
            this.state.ActivityIndicator?
            <ActivityIndicator size="small" color="white" style={{marginLeft:40}}/>
          :null
          }
     </View>
      </TouchableOpacity>
     
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
      <Button transparent style={{height:50,width:50,borderRadius:50/2,backgroundColor:'blue',justifyContent:'center'}}>
      {/* <Text style={{color:'#f39c12'}}></Text> */}
      <Icon active name='facebook-f' size={22} style={{color:'#fff'}} />

      </Button>

      <Button transparent style={{height:50,width:50,borderRadius:50/2,backgroundColor:'red',justifyContent:'center',marginLeft:10}}>
      {/* <Text style={{color:'#f39c12'}}></Text> */}
      <Icon active name='google' size={22} style={{color:'#fff'}} />

      </Button>


      <Button transparent style={{height:50,width:50,borderRadius:50/2,backgroundColor:'red',justifyContent:'center',marginLeft:10}}>
      {/* <Text style={{color:'#f39c12'}}></Text> */}
      <Icon active name='instagram' size={22} style={{color:'#fff'}} />

      </Button>
      </View>
        </Form>
        
      <View style={{}}>
      <Button transparent style={{alignSelf:'center',backgroundColor:'#f2cb6e'}}
               onPress={() =>this.props.navigation.navigate('ForgotPassword') }
               >

        <Text style={{fontSize:20,textAlign:'center',backgroundColor:'#f2cb6e',color:'blue'}}>FORGET YOUR PASSWORD</Text>
        </Button>        
        <Button transparent style={{alignSelf:'center'}} 
         onPress={() =>this.props.navigation.navigate('SignupScreen') }
        >
        <Text style={{color:"#f2cb6e",fontWeight:'bold',fontSize:18,textAlign:'center',alignSelf:'center'}}>Create an account</Text>
        </Button>
        </View>

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
