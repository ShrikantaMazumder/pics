import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fyqhuClJcJv9bcX0Kn6es2DSM5uqYJxhOWaSAiKtTak'
    }
});