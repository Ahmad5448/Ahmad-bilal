
import React, { Component } from 'react';
import { View, Text,Image,StyleSheet ,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,
 } from 'native-base';
 import Modal from "react-native-modal";

 import Icon from 'react-native-vector-icons/FontAwesome';

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });
  closemodal(){
    this.setState({ isModalVisible: !this.state.isModalVisible });

  }

  gotoaccomodationhome(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('AccomodationHome') 

  }
  gotoneibhorhoodadvisor(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('NeibhourhoodAdvisor') 

    
  }

  gotocommunity(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('Community') 
  }

  gotofood(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('Foods') 
  }

  gotoentertain(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('Entertaiment') 
  }
  gotonews(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('News') 
  }

  gotoweather(){
    this.setState({ isModalVisible: !this.state.isModalVisible });
    this.props.navigation.navigate('Weather') 
  }
  render() {
    if(this.state.isModalVisible===false){
    return (
      <Container>

      <Header style={{height:70,backgroundColor:'#cc9312',width:'100%',flexDirection:'row',justifyContent: 'space-between',}}>
        <View style={{justifyContent:'center',alignItems: 'center',width:'50%'}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>NEIBHOURHOOD</Text>
        </View>
        <View style={{justifyContent:'center',width:'50%'}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>(0 Members)</Text>
        </View>

      </Header>
      <Content >

      <View style={{width:'100%',paddingLeft:20}}>
        <Text style={{color:'#cc9312',fontWeight:'bold',fontSize:18}}>NEIBHOURHOOD WATCH TIP</Text>
        </View>

        <View style={{flexDirection:'row',width:'100%',paddingTop: 10,}}> 


        <View style={{justifyContent:'center',width:'40%',alignItems:'center',}}>
              <Image source={require('../../images/girl-3071077_960_720.jpg')} style={{height:120, width:120}}/>  
         </View>

          <View style={{width:'60%',paddingRight:3}}>
          <Text>
          Searching for that perfect color has never been easier, 
          use our HTML color picker to browse millions of colors and color harmonies
          </Text>
          </View>

        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding: 30,}}>
        
        <View style={{width:'80%',justifyContent:'center'}}>
        <TouchableOpacity style={{backgroundColor:'gray',height:60,width:60,borderRadius:60/2,top:370,
        position:'absolute',Left:0,Right:0,justifyContent:'center',alignItems:'center'}}>

        <Icon name="users" size={25} color={'#fff'}/>
        </TouchableOpacity>
        </View>


        <View style={{width:'80%',justifyContent:'center'}}>
        < TouchableOpacity style={{backgroundColor:'gray',height:60,width:60,borderRadius:60/2,top:370,
        position:'absolute',Left:0,Right:0,justifyContent:'center',alignItems:'center'}}onPress={this._toggleModal.bind(this)}>

        <Icon name="plus" size={25} color={'#000'}/>
        
        </TouchableOpacity>
        </View>
        
        

        </View>
      </Content>
      </Container>
    );
    }
    else if(this.state.isModalVisible===true){
      return(
         
        <Modal isVisible={this.state.isModalVisible}>

          <View style={{flex:1  }}>
          <View style={{height:70,width:'100%',flexDirection:'row',justifyContent: 'space-between',}}>
        <Right>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={this.closemodal.bind(this)}>
          <Icon name="times" size={28} color={'#fff'}/>

          </TouchableOpacity>

        </Right>

      </View>   
      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop: 40,}}>

        <TouchableOpacity style={{width:'30%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}}
         onPress={this.gotoaccomodationhome.bind(this)}>  
        <Image source={require('../../images/1.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>Accomodation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width:'36%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}}
        onPress={this.gotoneibhorhoodadvisor.bind(this)}>  
        <Image source={require('../../images/2.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>Neibhour Advisor</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{width:'30%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}}
        onPress={this.gotocommunity.bind(this)}>  

        <Image source={require('../../images/3.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>Community</Text>


        

        </TouchableOpacity>

        

      </View>   

      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop: 40,}}>

        <TouchableOpacity style={{width:'30%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}} 
        onPress={this.gotofood.bind(this)}>  

        <Image source={require('../../images/4.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>Food</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{width:'30%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}}
        onPress={this.gotoentertain.bind(this)}>  
        <Image source={require('../../images/5.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>Entertainment</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{width:'30%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}}
        onPress={this.gotonews.bind(this)}>  
        <Image source={require('../../images/6.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>News</Text>

        </TouchableOpacity>
    </View> 

    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',marginTop: 40,}}>

        <TouchableOpacity style={{width:'30%',justifyContent:'center',height:'15%',borderRadius:10,alignItems:'center'}}
        onPress={this.gotoweather.bind(this)}>  
        <Image source={require('../../images/7.png')} style={{height:90, width:90,borderRadius:90/2}}/>
        <Text style={{color:'#fff',fontWeight:'bold'}}>Weather</Text>

        </TouchableOpacity>

        
    </View>   

      
      
            
            {/* <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity> */}
          </View>
        </Modal>

      );

    }
  }
}
