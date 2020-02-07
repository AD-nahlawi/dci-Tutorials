import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
})

const getMovieList = () => api.get('/list')
const sendMovie = (data) => api.post('/newReview',data)
const deleteMovie = (data) => api.delete('/deleteMovie',data)

const listUsers = () => api.get('/listusers')
const listContacts = () => api.get('/listcontacts')

const apis = {
    getMovieList,
    sendMovie,
    deleteMovie,
    listUsers,
    listContacts
}

export default apis
