import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://app-mern-chat.herokuapp.com'
})

export default instance