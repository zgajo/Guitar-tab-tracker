const Api = require( '@/services/api')

export default {
    index(params){
        return Api().get('bookmarks', {
            params: params
        })
    },
    post(params){
        return Api().post('bookmarks', params)
    },
    delete(id){
        console.log(id)
        return Api().delete(`bookmarks/${id}`);
    }
}