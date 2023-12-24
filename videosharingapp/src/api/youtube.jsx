
import axios from 'axios';
const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
})

// AIzaSyCcHVgKaOJLshsS049oW6p4dCG6EfWTbgU

export default youtube;
