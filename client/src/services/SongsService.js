const Api = require( '@/services/api')

export default {
    index(value){
        return Api().get('songs', {
            params: {
                value
            }
        })
    },
    view(id){
        return Api().get(`songs/${id}`)
    },
    post(songs){
        return Api().post('songs', songs)
    },
    update(song){
        return Api().put(`songs/${song.id}`, song)
    }
}