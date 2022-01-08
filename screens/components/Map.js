import React, { useEffect, useState } from 'react'
import { StyleSheet, PermissionsAndroid} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { setOrigin } from '../../slices/navSlice'
//import GetLocation from 'react-native-get-location'
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from 'react-native-geolocation-service'



MapboxGL.setAccessToken('pk.eyJ1IjoicGF3YXRyaXAxIiwiYSI6ImNreHl1YWwxazJ5bmMzMnA0dmNsMjgzMDIifQ.1q3P-KgFsKWEmuqY0ttuCw');


const Map = () => {
  const [ currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude,setCurrentLatitude ] = useState('...');
  const [locationStatus,  setLocationStatus] = useState('');
  const dispatch  = useDispatch();
  useEffect(() => {
    
    const requestLocationPermission = async () => {
      
      if (Platform.OS === 'ios') {
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
            
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    getCurrLocation();
    return () => {
      // Geolocation.clearWatch(watchID);
    };
  }, []);

  const getCurrLocation =()=>{
      Geolocation.getCurrentPosition(
        position => {
          console.warn(position)
          dispatch(
            setOrigin({
              location:position.coords,
              lat:position.coords.latitude,
              lng:position.coords.longitude
            })
          )
        })

  }

  


  
    return (
<MapboxGL.MapView
    style={tw`flex-1 `}
    onPress={getCurrLocation}>

      <MapboxGL.Camera
        zoomLevel={12}
        centerCoordinate={[36.7442,1.3939]}
        on
      ></MapboxGL.Camera>
    </MapboxGL.MapView>
      
    )
}

export default Map

const styles = StyleSheet.create({})




