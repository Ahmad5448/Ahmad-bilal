import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,List, ListItem,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';

export default class NeibhourhoodAdvisor extends Component {
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
                <Text>Advertising</Text>
              </Left>
              <Right>
                <Icon name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text>Electricians</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Plumbers</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Aircons/Hvac</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Appliance repairs </Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Building & Construction</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Business Servicess & consultants</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Clothing & Textiles</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Courier Services</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Engineering</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>



            <ListItem>
              <Left>
                <Text>IT Services</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>



            <ListItem>
              <Left>
                <Text>Pneumatics & Hydrolics</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Transport</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Beauty and Grooming</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>



            <ListItem>
              <Left>
                <Text>Safety & Security</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Agriculture</Text>
              </Left>
              <Right>
              <Icon name="chevron-right" />
              </Right>
            </ListItem>


            <ListItem>
              <Left>
                <Text>Motoring</Text>
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
