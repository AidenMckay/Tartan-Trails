const url = "http://localhost:3001/api/gnomes"

export const fetchGnomes = () => {
    return fetch(url)
        .then(res => res.json())
}