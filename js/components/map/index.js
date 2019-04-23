import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,Dimensions} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content,Form,
  Item,
  Input,
 } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
 import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

 const {width, height} = Dimensions.get('window')
 const SCREEN_HEIGHT = height
 const SCREEN_WIDTH = width



 
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude1: null,
      longitude1: null,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         alert(JSON.stringify(position));
         this.setState({
           latitude1: position.coords.latitude,
           longitude1: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
     
   }

  render() {
    let myregion={latitude: 37.785834,
      longitude: -122.406417,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,}


    let mycordinates={latitude:  37.785834,
      longitude:-122.406417,}


    // let mylocation={atitude:this.state.latitude1,
    //   longitude:this.state.longitude1}

    // const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
    // const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

    return (
      <Container>
      <Header style={{backgroundColor:'#cc9312'}}>
        <Left></Left>
        <Body>
        <Image source={require('../../images/PNG02.png')} style={{height:60, width:150}}/>

        </Body>
        <Right>
          
        </Right>
      </Header>
      <Content>
      <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}

      getDefaultValue={() => ''}

      query={{
        // available options: c
        key: 'YOUR API KEY',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'cafe'
      }}
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      // predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
      // renderRightButton={() => <Text>Custom text after the input</Text>}
    />

        <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={myregion}
       
     >
     <Marker
      coordinate={mycordinates}
      title="My Location"
      description="Here i am"
    />
     
    
     </MapView>
   </View>


      </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });