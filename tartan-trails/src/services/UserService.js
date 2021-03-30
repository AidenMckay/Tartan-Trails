export default {
  url: "http://localhost:3001/api",
  signIn: function(username, password) {
    const user = {
      username, password
    }
    return fetch(this.url + "/signin", {method: POST, headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
      .then(res => res.json())
  },
  signUp: function(username, password) {
    const user = {
      username, password
    }
    return fetch(this.url + "/signup", {method: POST, headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
      .then(res => res.json())
  },
  collectGnome: function(username, gnome) {
    const user = {
      username
    }
    return fetch(this.url + "/gnome-collected/" + gnome, {method: POST, headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)})
      .then(res => res.json())
  }
}

signIn("poopoohead", "password1")
  .then(user => {
    // user is now a user object like { loggedIn: true, user: { username: "poopoohead", password: "password1", achievements: { gnome1: true... } } }
  })
  .catch(console.error)