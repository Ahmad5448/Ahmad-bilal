import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,List, ListItem,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';

export default class AccomodationHome extends Component {
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
          <Header style={{backgroundColor:'#cc9312'}}>
          <Left>
            <Button transparent onPress={() =>this.props.navigation.navigate('Activity') }
>
              <Icon name='chevron-left'  size={20} color={'#fff'}/>
            </Button>
          </Left>
          <Body>
          {/* <Image source={require('../../images/PNG02.png')} style={{height:60, width:150}}/> */}

            <Title style={{color:'#fff'}}>Accomodation</Title>
          </Body>
          <Right>
           
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text>local B&B</Text>
              </Left>
              <Right>
                <Button transparent onPress={() =>this.props.navigation.navigate('Publish') }>
                <Icon name="chevron-right" />
                </Button>
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Hotels</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Homes To rent</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>property for sale</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}
