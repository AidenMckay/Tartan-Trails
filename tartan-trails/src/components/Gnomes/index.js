import { useState, useEffect } from 'react'
import { fetchGnomes } from '../../services/GnomeService'
import { getLocation } from '../../services/LocationService'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapWrapper } from './GnomesElements';
import gnomeIcon from '../../images/gnotagnoblin.png';
import blackGnomeIcon from '../../images/gnotagnoblinbackout.png';
import L from 'leaflet';

export const Gnomes = () => {
    const [gnomes, setGnomes] = useState([])
    const [userLocation, setUserLocation] = useState(null)
    
    const gnomeMarker = L.icon({ iconUrl: gnomeIcon, iconSize: new L.Point(60, 75) })
    const blackGnomeMarker = L.icon({ iconUrl: blackGnomeIcon, iconSize: new L.Point(60.75) })

    useEffect(() => {
        fetchGnomes()
            .then(setGnomes)

        getLocation()
            .then(position => setUserLocation(position.coords))
    }, [])

    if (!userLocation) return <h1>Loading...</h1>

    const user = JSON.parse(localStorage.getItem("auth"))

    const markers = gnomes.map(({name, coords}, index) => {
        const image = (user && user.user.achievements[name.toLowerCase()]) ? gnomeMarker : blackGnomeMarker
        return (
            <Marker key={index} position={[coords.lat, coords.lng]} icon={image}>
                <Popup>
                    {name}
                </Popup>
            </Marker>
        )
    })

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