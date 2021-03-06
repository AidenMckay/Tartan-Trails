import { useState, useEffect } from 'react'
import { fetchGnomes } from '../../services/GnomeService'
import { getLocation } from '../../services/LocationService'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapWrapper } from './GnomesElements';
import gnomeIcon from '../../images/gnotagnoblin.png'
import L from 'leaflet';

export const Gnomes = () => {
    const [gnomes, setGnomes] = useState([])
    const [userLocation, setUserLocation] = useState(null)
    
    const gnomeMarker = L.icon({ iconUrl: gnomeIcon, iconSize: new L.Point(60, 75) })

    useEffect(() => {
        fetchGnomes()
            .then(setGnomes)

        getLocation()
            .then(position => setUserLocation(position.coords))
    }, [])

    if (!userLocation) return <h1>Loading...</h1>

    const markers = gnomes.map(({name, coords}, index) => (
        <Marker key={index} position={[coords.lat, coords.lng]} icon={gnomeMarker}>
            <Popup>
                {name}
            </Popup>
        </Marker>
    ))

    return (
        <MapWrapper>
            <MapContainer center={[userLocation.latitude, userLocation.longitude]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <Marker position={[userLocation.latitude, userLocation.longitude]}>
                    <Popup>
                        You are here!
                    </Popup>
                </Marker>
                {markers}
            </MapContainer>
        </MapWrapper>
    )

}