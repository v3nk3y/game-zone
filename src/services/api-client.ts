import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c017353d2520452d9593caac4b20b856'
    }
})