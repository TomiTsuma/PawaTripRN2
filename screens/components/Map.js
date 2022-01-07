import React, { useEffect, useState } from 'react'
import { StyleSheet, PermissionsAndroid} from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../../slices/navSlice'
//import GetLocation from 'react-native-get-location'
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation'




MapboxGL.setAccessToken('pk.eyJ1IjoicGF3YXRyaXAxIiwiYSI6ImNreHl1YWwxazJ5bmMzMnA0dmNsMjgzMDIifQ.1q3P-KgFsKWEmuqY0ttuCw');


const Map = () => {
  const [ currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude,setCurrentLatitude ] = useState('...');
  const [locationStatus,  setLocationStatus] = useState('');
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);


  
    return (
<MapboxGL.MapView
    style={tw`flex-1 `}>

      <MapboxGL.Camera
        zoomLevel={8}
        centerCoordinate={[135, 1]}
      ></MapboxGL.Camera>
    </MapboxGL.MapView>
    // position={{
    //   latitude:currentLatitude,
    //   longitude:currentLongitude
    // }}

    // mapType="mutedStandard"
    
    // initialRegion={{
    //    latitude: 36.7685,
    //    longitude: 1.3823,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // }}
      
    )
}

export default Map

const styles = StyleSheet.create({})
