import axios from 'axios';

const baseUrl = '/api/persons'

const Service = {

    getAll: () =>
        axios
            .get(baseUrl)
            .then(res => res.data),

    addContact: person =>
        axios
            .post(baseUrl, person)
            .then(res => res.data),

    updateContact: (id, person) => 
        axios
            .put(`${baseUrl}/${id}`, person)
            .then(res => res.data),

    deleteContact: id => 
        axios
            .delete(`${baseUrl}/${id}`)


}
export default Service;