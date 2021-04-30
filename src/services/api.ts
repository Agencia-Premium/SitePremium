import axios from 'axios'

const api = axios.create({
    baseURL: 'http://cms.agenciapremium.com.br/'
})

export default api; 