const {Song} = require('../models');

module.exports = {
    async index(req, res){
        
        try{
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        }
        catch(e){
            res.status(500).send({
                error: "An error has occured trying to fetch the songs"
            })
        }
        
    },

    async post(req, res){
        
        try{
            console.log(req.body)
            const songs = await Song.create(req.body)
            res.send(songs)
        }
        catch(e){
            res.status(500).send({
                error: "An error has occured trying to create the song"
            })
        }
        
    },

    async put(req, res){
        
        try{
            console.log(req.body)
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.send(req.body)
        }
        catch(e){
            res.status(500).send({
                error: "An error has occured trying to update the song"
            })
        }
        
    }

}