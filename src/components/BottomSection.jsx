/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const BottomSection = ({ data }) => {
  let lat = data?.location.lat;
  let lon = data?.location.lng;
  const customIcon = new Icon({
    iconUrl: '/icon-location.svg',
    iconSize: [46, 56],
  });

  return (
    <section className='lg:h-[65vh] h-auto w-full bottom z-20 ' id='map'>
      <MapContainer center={[51.5, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {lon && (
          <Marker position={[lat, lon]} icon={customIcon}>
            <Popup>This is Where you are!!</Popup>
          </Marker>
        )}
      </MapContainer>
    </section>
  );
};

export default BottomSection;
