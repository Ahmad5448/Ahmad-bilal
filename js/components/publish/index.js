import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,List, ListItem,Textarea
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';

export default class Publish extends Component {
    static navigationOptions = {
        header: null}
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>

            {/* my on custom header */}
        <Header style={{backgroundColor:'#cc9312'}}>
        
        <View style={{flexDirection:'row',width:'100%',justifyContent: 'space-between',}}>
            <TouchableOpacity style={{width:'8%',justifyContent:'center',alignItems:'center'}}
            onPress={() =>this.props.navigation.navigate('AccomodationHome') }>
            <Icon name='chevron-left'  size={20} color={'#fff'}/>
            </TouchableOpacity>
            <View style={{width:'92%',justifyContent:'center',alignItems: 'center',}} >
                <Text style={{color:'#fff',fontSize:17,fontWeight:'700'}}>Neighbourhood Advisor</Text>
            </View>
        </View>
      </Header>
      <Content contentContainerStyle={{padding: 20}}>

            {/* profile pic with name  */}
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={{height:45,width:45,borderRadius:45/2,backgroundColor:'#d9d9dd'}}>

      </View>
        <Text style={{color:'#616366',fontWeight:'600',marginLeft: 3,}}>Jhon doe</Text>
      </View>
    
    {/* category with sub-category */}

    <View style={{flexDirection:'row',alignItems:'center'}}>
      <View >
            <Text style={{color:'#262728',fontWeight:'600' ,fontSize:16}}>Neighbourhood Advisor ></Text>
      </View>
        <Text style={{color:'#262728',fontWeight:'600',marginLeft: 3,fontSize:16}}>Jhon doe</Text>
      </View>
        
        {/* input for title */}
            <View style={{marginTop:10}}>
                <Text style={{fontSize:16,color:'#555656',fontWeight:'600'}}>TITLE</Text>
                <Item regular style={{backgroundColor:'#d9d9dd',borderRadius:10,marginTop:5}}>
                     <Input placeholder='Regular Textbox'   />
                </Item>
            </View>

            {/* image upload view */}

            <Text style={{fontSize:16,marginTop: 5,color:'#555656',fontWeight:'600'}}>IMAGE</Text>

            <View style={{marginTop:10,backgroundColor:'#d9d9dd',borderRadius:10,height:200,justifyContent:'center',alignItems:'center'}}>
                
                <TouchableOpacity style={{backgroundColor:'#e21616',borderRadius:10,width:'30%',justifyContent:'center',alignItems:'center',paddingVertical: 10,}}>
                    <Text style={{color:'#ffff'}}>UPLOAD</Text>
                </TouchableOpacity>
            </View>

            {/* text area */}
            <Text style={{fontSize:16,marginTop: 5,color:'#555656',fontWeight:'600'}}>DESCRIPTION</Text>

            <Form>
            <Textarea rowSpan={6} bordered placeholder="Textarea" style={{backgroundColor:'#d9d9dd',borderRadius:10}}/>
          </Form>

          {/* PUBLISH BUTTON */}
          <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
          <TouchableOpacity style={{backgroundColor:'#b28c1a',borderRadius:10,width:'30%',justifyContent:'center',alignItems:'center',paddingVertical: 10,}}>
                    <Text style={{color:'#ffff'}}>PUBLISH</Text>
                </TouchableOpacity>
          </View>
      </Content>
      </Container>
    );
  }
}
