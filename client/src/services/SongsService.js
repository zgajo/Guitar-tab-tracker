const Api = require( '@/services/api')

export default {
    index(){
        return Api().get('songs')
    },
    post(songs){
        return Api().post('songs', songs)
    },
    update(song){
        console.log(song)
        return Api().put(`songs/${song.id}`, song)
    }
}