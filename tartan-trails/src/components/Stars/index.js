import { useState, useEffect } from 'react'
import { getLocation } from '../../services/LocationService'

export const Stars = () => {
    const [userLocation, setUserLocation] = useState(null)

    useEffect(() => {
        getLocation()
            .then(position => setUserLocation(position))
    }, [])


    return (userLocation) ? (<h1>{ userLocation.coords.latitude }, { userLocation.coords.longitude }</h1>) : (<h1>Loading...</h1>)
}