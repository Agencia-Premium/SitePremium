import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cms.agenciapremium.com.br'
})

export default api; 