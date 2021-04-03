import React, {useState} from "react"
import { useHistory, useParams, Link } from 'react-router-dom'
import UserService from '../services/UserService'

export default function () {
  const { gnome } = useParams()
  const history = useHistory()
  const [renderedComponent, setRenderedComponent] = useState(<h1>Collecting your gnome...</h1>)

  const auth = JSON.parse(localStorage.getItem("auth"))
  if (!auth.user) {
    return (
      <>
        <h1>You are not logged in. Please sign up or sign in and scan the gnome again.</h1>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </>
    )
  }
  const username = auth.user.username
  UserService.collectGnome(username, gnome.toLowerCase())
    .then(res => {
      setRenderedComponent(<>
        <h1>Gnome collected! It may take up to 30 seconds to update on map.</h1>
        <Link to="/gnomes">View map</Link>
      </>)
    })
    .catch(() => alert("Something went wrong, try again!"))

  return renderedComponent
}