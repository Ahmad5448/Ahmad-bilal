import React, { Component } from 'react';
import { View, Text,Image ,StyleSheet,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container style={styles.Containerstyle}>
       <Header style={styles.headerstyle}> 
          <Left>
            <Button transparent >
            <Text style={{color:'white',fontSize:16}}>PROFILE</Text>
              
            </Button>
          </Left>
          <Right>
          <Button transparent onPress={() =>this.props.navigation.navigate('Editprofile') }>
            <Icon name='edit' color={'white'} size={32} />
            </Button>
          </Right>
        </Header>
      <Content>

      <View style={{justifyContent:'center',alignItems:'center'}}>  
            <View  style={{height:80,width:80,borderRadius:80/2,marginTop:18,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'#cc9312'}}>
            <Icon name='user' color={'#a3a3a8'} size={40}  />

            </View>
            <View style={{position:'absolute',paddingLeft:60}}>
        <TouchableOpacity style={{borderRadius:20,width:40,height:40,borderColor:'#fff'}}
        >
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:0}}>
        <Icon name='camera' color={'red'} size={25} />
        </View>
        </TouchableOpacity>
        </View>
         <Text style={{color:'#000',fontSize:16,marginTop:3}}>JHON JAMES</Text>
         <Text style={{color:'#a3a3a8',fontSize:14,marginTop:3}}>INFO@TECH.COM</Text>
         <Text style={{color:'#a3a3a8',fontSize:14,marginTop:3,fontWeight:'600'}}>2465 Hempstead Turnipike ,East Meadow NY 11554</Text>
        </View> 
        
        
         

      
      </Content>

     
    </Container>
  );
  }
}

const styles = StyleSheet.create({
  headerstyle:{
      backgroundColor:'#cc9312'
  },
  Containerstyle:{
      //backgroundColor:'#000'
  },
  textstyle:{
      color:'#fff',
      paddingLeft:30,
      fontSize: 17,
  },
  moneystyle:{
      color:'#fff',
     
      fontSize:32,

  },
  recentvideosstyle:{
      flexDirection:'row',
      justifyContent: 'space-between',
      width:'100%'
  },
  recentvideosinnerstyle:{
      alignItems:'center'
  },
  footerstyle:{
      backgroundColor:'#000'
  },
  liststyle:{
    color:'#fff'
  },
  loginbuttonstyle:{
          
    height:50,
    backgroundColor:'#14D0D0',
    //paddingVertical: 10,
   
    borderColor: '#fff',
     borderWidth: 1,
     borderRadius: 5,
     width:"90%",
     alignItems:'center',justifyContent:'center'
    
},
button1: {
  //width: 260,
  backgroundColor: '#14D0D0',
  justifyContent:'center',
},
buttonText: {
  //padding: 10,
  color: 'white',
  fontSize:22,
},



})