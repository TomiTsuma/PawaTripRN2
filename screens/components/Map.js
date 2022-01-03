import React from 'react'
import { StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../../slices/navSlice'
import GetLocation from 'react-native-get-location'
import MapboxGL from '@react-native-mapbox-gl/maps';


MapboxGL.setAccessToken('pk.eyJ1IjoicGF3YXRyaXAxIiwiYSI6ImNreHlycmN5cjJqODkycm1wcTF4emxiMzQifQ.EsxEg95uy7Hljrk1Fr4Btw');


const Map = () => {
   
    return (
<MapboxGL.MapView
    style={tw`flex-1 `}
    // mapType="mutedStandard"
    // initialRegion={{
    //    latitude: 36.7685,
    //    longitude: 1.3823,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // }}
  />    
    )
}

export default Map

const styles = StyleSheet.create({})
