import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://estudiantes.test/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {
    getEstudiantes() {
        return apiCliente.get('/estudiantes')
    },
    getEstudiante(id) {
        return apiCliente.get('/estudiantes/'+id)
    },
    deleteEstudiante(id) {
        return apiCliente.delete('/estudiantes/'+id)
    },
    createEstudiante(estudiante) {
        return apiCliente.post('/estudiantes/', estudiante)
    },
    updateEstudiante(id, estudiante) {
        return apiCliente.put('/estudiantes/'+id, estudiante)
    },
}