import React from "react";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectDestination, selectOrigin } from "../slices/navSlice";

export default function Map() {
  const destination = useSelector(selectDestination);
  const origin = useSelector(selectOrigin);

  if (destination && origin)
    console.log(`🚓 from ${origin} to ${destination} \n`);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={{ latitude: 28.450627, longitude: -16.263045 }} />
    </MapView>
  );
}
