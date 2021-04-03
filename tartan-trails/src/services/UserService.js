import { useHistory } from "react-router-dom"

export default {
  url: "http://localhost:3001/api",
  signIn: function(username, password) {
    const user = {
      username, password
    }
    return fetch(this.url + "/signin", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error("Something went wrong.")
      })
  },
  signUp: function(username, password) {
    const user = {
      username, password
    }
    return fetch(this.url + "/signup", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
      .then(res => res.json())
  },
  collectGnome: function(username, gnome) {
    const user = {
      username
    }
    return fetch(this.url + "/gnome-collected/" + gnome, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
      .then(res => res.json())
  },
  refreshUser() {
    if (localStorage.getItem("auth")) {
      const user = JSON.parse(localStorage.getItem("auth"))
      fetch(this.url + "/user/" + user.user.username)
        .then(res => res.json())
        .then(achievements => localStorage.setItem("auth", JSON.stringify({...user, user: {...user.user, achievements}})))
    }
  },
  logOut: function() {
    localStorage.removeItem("auth")
  }
}

// signIn("poopoohead", "password1")
//   .then(user => {
//     // user is now a user object like { loggedIn: true, user: { username: "poopoohead", password: "password1", achievements: { gnome1: true... } } }
//   })
//   .catch(console.error)