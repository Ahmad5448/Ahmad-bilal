import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator,Picker,TextInput} from 'react-native';

import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
 import axios from 'axios';
 import ModalSelector from 'react-native-modal-selector'


export default class SignupScreen extends Component {
  static navigationOptions = {
    header: null}
    constructor(props) {
      super(props);
      this.state = {
        countryModalValue:'',
        countryApiResponse:'',
        state:'',
        mystate:'',
        city:'',
        mycity:'',
        userName:'',
        email:'',
        password:'',
        phoneNumber:'',
        country_id:'',
        state_id:'',
        city_id:'',
        ActivityIndicator:false
      };
    }
    showActionSheet = () => {
      this.ActionSheet.show()
    }
    componentDidMount(){
      // call get api for conuntries///
    axios.get("http://172.104.217.178/neighborhood/public/api/getcountries")
    .then((response) => {
      //  alert(JSON.stringify(response));
       this.setState({
            countryApiResponse:response.data.result
       })
    })
    .catch(error => alert(JSON.stringify(error)));
      
    }
    onValueChange(id,field,label){
      // alert(id)

      if(field==='country'){
        this.setState({
          countryModalValue:label,country_id:id
        })
      ////states get api////
        axios.get("http://172.104.217.178/neighborhood/public/api/getstates/"+id,{})
        .then((response) => {
          // alert(JSON.stringify(response));
            this.setState({
              state:response.data.result
            });
            //alert(JSON.stringify(this.state.country))
           
        })
        .catch(error => alert('error coming'));
  
      }

      else if(field==='state'){
        this.setState({
          mystate:label,state_id:id
        })
        ////city get api////
        axios.get("http://172.104.217.178/neighborhood/public/api/getcities/"+id,{
        
        })
        .then((response) => {
          // alert(JSON.stringify(response));
            this.setState({
              city:response.data.result
            });
            //alert(JSON.stringify(this.state.country))
           
        })
        .catch(error => alert('error coming'));
      }

      else if(field==='city'){
        this.setState({
          mycity:label,city_id:id
        })
      }
    }  

    ////update input fields value////
    updatevalue(text,field)
    {
        if(field==='username'){
          this.setState({userName:text})
        }
else if(field==='email'){
  this.setState({email:text})
}
else if(field==='pass'){
  this.setState({password:text})
}
else if(field==='no'){
  let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            
            alert("please enter numbers only");
        }
    }
  this.setState({phoneNumber:newText})
}


    }

    signup(){
      this.setState({ActivityIndicator:true})

      console.log('cahjahjdhjahdjhjdh')
      console.log(this.state.country_id);
      console.log(this.state.state_id);
      console.log(this.state.city_id);

      axios.post("http://172.104.217.178/neighborhood/public/api/register",{
        name:this.state.userName,
        email:this.state.email,
        phone:this.state.phoneNumber,
        password:this.state.password,
        country:this.state.country_id,
        state:this.state.state_id,
        city:this.state.city_id
      })
      .then((response) => {
        // alert(JSON.stringify(response));
        if(response.data.status==1){
         this.setState({
          ActivityIndicator:false,
          userName:'',
          email:'',
          phoneNumber:'',
          password:'',
          countryModalValue:'',
          mystate:'',
          mycity:'',
         })
          //alert(JSON.stringify(this.state.country))
        }
      })
      .catch((error) => {this.setState({
        ActivityIndicator:false,
          userName:'',
          email:'',
          phoneNumber:'',
          password:'',
          country_id:'',
          state_id:'',
          city_id:'',
      })
      alert(error);
    });   
    
    }
  render() {

    let countryOptions=[];
    let CountryOptionsState=this.state.countryApiResponse;
    for(let property in CountryOptionsState){
      countryOptions.push({ key:CountryOptionsState[property].id, label:CountryOptionsState[property].country_name})
    }
    
    let States=[];
    let allstates=this.state.state;
    if(allstates!==''){
    for(let property in allstates){
      States.push(
        { key:allstates[property].id, label:allstates[property].state_name }
      )
    }
  }
  let city1=[];
    let allcity=this.state.city;
    if(allcity!==''){
    for(let property in allcity){
      city1.push(
        { key:allcity[property].id, label:allcity[property].city_name }
      )
    }}
    return (
      <Container>
        <Header style={{backgroundColor:'#cc9312'}}>
          <Left>
            <Button transparent>
              <Icon name='chevron-left'  size={20} color={'#fff'}/>
            </Button>
          </Left>
          <Body>
          <Image source={require('../../images/PNG02.png')} resizeMode={'cover'} style={{height:60, width:150}}/>

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
        

   
      
      
      <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
    <View style={{ width: '100%',backgroundColor:'#b9994c', borderRadius:10,elevation:10,borderWidth:2,borderColor:'#91722a',
   }}> 
    
    <View style={{paddingTop:10,textAlign:'center'}}> 
        <Text style={{fontSize:22,textAlign:'center',fontWeight:'bold',paddingTop:10,color:'yellow'}}>
            BECOME A USER
        </Text>
    </View>
     <Form style={{paddingTop:30,alignItems:'center',}}>
     
          <Item regular style={{backgroundColor:'#fff',borderRadius:6,width:'90%'}}>
          <Icon active name='user' size={22} style={{marginLeft:5}}/>
            <Input placeholder="USER NAME" 
            onChangeText={(text)=>this.updatevalue(text,'username')} value={this.state.userName} 
            />
          </Item>

          <Item regular style={{backgroundColor:'#fff',borderRadius:6,width:'90%',marginTop:10,}}>
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
          <View style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%',
          }}>
          <ModalSelector
                    data={countryOptions}
                    initValue="Select your country!"
                    style={{color:'white'}}
                    // supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                   onChange={(value)=>this.onValueChange(value.key,'country',value.label)}>

 
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50,color:'black'}}
                        editable={false}
                        placeholder="Select your country!"
                        placeholderTextColor="black"

                        value={this.state.countryModalValue}
                         />
 
                </ModalSelector>
   </View>

   <View style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%'}}>
            <ModalSelector
                    data={States}
                    initValue="Select your state!"
                    style={{color:'black'}}
                    // supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(value)=>this.onValueChange(value.key,'state',value.label)}>

 
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50,color:'black'}}
                        editable={false}
                        placeholder="Select syour state!"
                        placeholderTextColor="black"

                        value={this.state.mystate} />
 
                </ModalSelector>
                </View>

                <View style={{backgroundColor:'#fff',marginTop:10,borderRadius:6,width:'90%'}}>
            <ModalSelector
                    data={city1}
                    initValue="Select your city!"
                    style={{color:'white'}}
                    // supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(value)=>this.onValueChange(value.key,'city',value.label)}>
 
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50,color:'black'}}
                        editable={false}
                        placeholder="Select your city!"
                        placeholderTextColor="black"
                        value={this.state.mycity} />
 
                </ModalSelector>
                </View>

          
          
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
      <TouchableOpacity style={styles.buttoncontainer} 
                    onPress={this.signup.bind(this) }
                 >
               {/* <Text style={styles.buttontext}>Log In</Text> */}

      <View style={{flexDirection:'row',width:"50%",justifyContent:'center'}}>
          <Text style={styles.buttontext}>Sign Up</Text>
          {
            this.state.ActivityIndicator?
            <ActivityIndicator size="small" color="white" style={{marginLeft:40}}/>
          :null
          }
     </View>
      </TouchableOpacity>
     
        </Form>
        

      <View style={{}}>
        {/* <Text style={{fontSize:20,textAlign:'center',backgroundColor:'#f2cb6e',color:'blue'}}>FORGET YOUR PASSWORD</Text> */}
        <Button transparent style={{alignSelf:'center'}} 
                   onPress={() =>this.props.navigation.navigate('LoginScreen') }
                   >
        <Text style={{color:"#f2cb6e",fontWeight:'bold',fontSize:18,textAlign:'center',alignSelf:'center'}}>Login to your account</Text>
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
      
     // marginTop: 10,
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
