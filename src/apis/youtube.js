export default class Youtube {
    constructor(client) {
        this.client = client
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
    }

    async channelImageURL(id) {
        return this.client.channels({ params: { part: 'snippet', id }})
        .then((res) => res.data.items[0].snippet.thumbnails.default.url)
    }

    async relatedVideos(id) {
        return this.client.search({
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                relatedToVideoId: id
            }
        })
        .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })))
    }

    async #searchByKeyword(keyword) {
        return this.client.search(
            {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    q: keyword
                }
            }
        )
        .then((res) => res.data.items.map((it) => ({ ...it, id: it.id.videoId })))
    }

    async #mostPopular() {
        return this.client
        .video({
            params: {
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular'
            }
        })
        .then((res) => res.data.items)
    }
}