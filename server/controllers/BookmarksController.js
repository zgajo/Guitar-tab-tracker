const {Bookmark} = require('../models');

module.exports = {
    async index(req, res){
        
        try{
            const {songId, userId} = req.query;

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            });

            res.send( bookmark);

        }
        catch(e){
            res.status(500).send({
                error: "An error has occured trying to fetch the bookmark"
            })
        }
        
    },

    async post(req, res){
        
        try{
            const { songId, userId } = req.body;

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            });

            console.log(bookmark)

            if(bookmark){
                res.status(500).send({
                    error: "Already bookmarked"
                })
            }

            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            });

            res.send( newBookmark);

        }
        catch(e){
            res.status(500).send({
                error: "An error has occured trying to create the bookmark"
            })
        }
        
    },

    async delete(req, res){
        
        try{
            const bookmark = await Bookmark.findOne({
                where: {
                    id: req.params.id
                }
            });

            bookmark.destroy();

            res.send(bookmark);

        }
        catch(e){
            res.status(500).send({
                error: "An error has occured trying delete bookmark"
            })
        }
        
    },

}