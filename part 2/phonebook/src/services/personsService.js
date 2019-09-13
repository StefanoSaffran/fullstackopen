import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'
const Service = {

    getAll: () =>
        axios
            .get(baseUrl)
            .then(res => res.data),

    addContact: person =>
        axios
            .post(baseUrl, person)
            .then(res => res.data),

    updateContact: () => ''


}
export default Service;