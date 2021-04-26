import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { Icon } from "leaflet";

import foodIconGreen from "images/maker/food-truck-green.png";
import foodIconRed from "images/maker/food-truck-red.png";
import foodIconOrange from "images/maker/food-truck-orange.png";
import status from 'utils/enums'

import "./map.scss";

const iconGreen = new Icon({
  iconUrl: foodIconGreen,
  iconSize: [55, 55],
});

const iconRed = new Icon({
  iconUrl: foodIconRed,
  iconSize: [55, 55],
});

const iconOrange = new Icon({
  iconUrl: foodIconOrange,
  iconSize: [55, 55],
});

interface Props {
  items?: any[];
  location?: any;
}

interface PropsIn {
  location: any;
}
const DEFAULT_ZOOM = 13;

const MapIn = ({ location }: PropsIn) => {
  const map = useMap();
  map.setView(location, DEFAULT_ZOOM);
  return null;
};

const Map = ({ items = [], location: searchLocation }: Props) => {
  //console.log("items:::::::::::::::::", items);

  //console.log("searchLocation:::::::::::::::::", searchLocation);

  const [location, setLocation] = useState<any>([
    searchLocation?.lat || 51.0,
    searchLocation?.lng || 19.0,
  ]);

  useEffect(() => {
    if (searchLocation) {
      setLocation([searchLocation.lat, searchLocation.lng]);
    }
  }, [searchLocation]);

  return (
    <>
      <MapContainer
        className="markercluster-map"
        center={location}
        zoom={DEFAULT_ZOOM}
        minZoom={DEFAULT_ZOOM}
        maxZoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {location && <MapIn location={location} />}

        {items.map((item) => (
          <Marker
            position={[item.location.lat, item.location.lng]}
            icon={item?.status === status.approved? iconGreen : item?.status === status.requested ? iconOrange : iconRed}
            key={item?.id}
          >
            <Popup>
              <div className="popup-image-container" onClick={() => {}}>
                <div
                  style={{
                    fontSize: 17,
                    textTransform: "capitalize",
                    textAlign: "center",
                    overflow: "scroll",
                  }}
                >
                  <h6>{item?.address}</h6>
                  <h6 style={{ color: "gray" }}>({item?.foodItem})</h6>
                  <h6>({item?.type})</h6>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
