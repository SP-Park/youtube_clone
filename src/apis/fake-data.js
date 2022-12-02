import axios from "axios";

export default class FakeData {
    
    async search({ params }) {
        return axios.get(
            `/videos/${params.relatedToVideo ? 'related' : 'search'}.json`
        )
    }

    async video() {
        return axios.get('/videos/popular.json')
    }

    async channels() {
        return axios.get('/videos/channel.json')
    }
}