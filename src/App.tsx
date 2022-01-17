import React, {useState, useEffect} from 'react';
import axios from "axios"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import harbaData from './data/habraApI.json';
import { Modal } from './components/react-modal/modal';
import { useModal } from './components/react-modal/useModal';
import BookingForm from './components/bookingForm';
// import {Weather} from './components/weather';

function App() {
  const { isShown, toggle } = useModal();
  const content = <BookingForm />;
  const [weather, setWeather] = useState(null)


  useEffect(() => {
    async function getData() {
  // here should be an if-else where the [hrb.lat, hrb.lat] is == with lat & lot and then return url! 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=ee5596c438c6f751ebf2e64b85edc98b`
      try {
        const response = await axios.get(url)
        setWeather(response.data)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  // const filterHarbors = harbaData.filter((hrba: any) => hrba.locale === "?" )

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
            <div>
              <h2>{hrb.name}</h2>
              <img className="thumb" alt="thumb" src={hrb.image} />
              {/* <Weather api={weather} /> */}
              <div style={{textAlign: "right"}}>
                <button onClick={toggle}>Book</button>
                <Modal isShown={isShown} hide={toggle} modalContent={content} headerText="" />
              </div>
              </div>
          </Popup>
        </Marker>
      ))}
     
    </MapContainer>
  );
}

export default App;
