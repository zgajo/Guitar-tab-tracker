const {sequelize, Song, User, Bookmark} = require('../models');

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./user.json')
const bookmarks = require('./bookmarks.json')

console.log(bookmarks)

sequelize.sync({force: true})
        .then( async ()=>{
            await Promise.all(
                users.map(user => {
                    User.create(user);
                })
            );
            await Promise.all(
                songs.map(song => {
                    Song.create(song);
                })
            );
            await Promise.all(
                bookmarks.map(bookmark => {
                    Bookmark.create(bookmark);
                })
            )
        })