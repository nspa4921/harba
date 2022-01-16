import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import harbaData from './data/habraApI.json';
import { Modal } from './components/react-modal/modal';
import { useModal } from './components/react-modal/useModal';

function App() {
  const { isShown, toggle } = useModal();

  const content = <React.Fragment>Hey, I'm a model.</React.Fragment>;


  // const filterHarbors = harbaData.filter((hrba: any) => hrba.locale === "da_DK" )

  console.log(harbaData)
  return (
    <MapContainer center={[55.721050, 11.723988]} zoom={8} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {harbaData.map((hrb: any) => (
        <Marker 
          key = {hrb.id}
          position = {[hrb.lat, hrb.lon]}>
          
          <Popup position={[hrb.lat, hrb.lon]}>
            <h2>{"Name: " + hrb.name}</h2>
            <img className="thumb" alt="thumb" src={hrb.image} />
            {/* <CurrentWeather /> */}
             <button onClick={toggle}>Book</button>
            <Modal isShown={isShown} hide={toggle} modalContent={content} headerText="Booking form" />
          </Popup>
        </Marker>
      ))}
     
    </MapContainer>
  );
}

export default App;
