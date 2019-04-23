import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,List, ListItem,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';

export default class Entertaiment extends Component {
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

            <Title style={{color:'#fff'}}>Entertainment</Title>
          </Body>
          <Right>
           
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem selected>
              <Left>
                <Text>Pub and Grill</Text>
              </Left>
              <Right>
                <Icon name="chevron-right" />
              </Right>
            </ListItem>

            <ListItem>
             <Left>
                <Text>Nightlife</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
             <Left>
                <Text>Social</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>



            <ListItem>
             <Left>
                <Text>Groups/pages neighbourhood</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
             <Left>
                <Text>Instagram</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>



            <ListItem>
             <Left>
                <Text>Twitter</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
             <Left>
                <Text>People</Text>
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
