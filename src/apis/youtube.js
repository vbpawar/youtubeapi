import axios from 'axios';

const KEY = 'AIzaSyB3R5KjWFcZJJAqtfMAUnlVmBZ6t86rD8A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 9,
        key: KEY
    }
});