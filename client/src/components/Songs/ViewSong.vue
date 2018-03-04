<template>
  
            <v-card v-if="song">
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card color="blue-grey darken-2" class="white--text">
                      <v-card-media
                        class="white--text"
                        height="200px"
                        :src="song.albumImage"
                      >
                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline">{{song.title}} by {{song.artist}}</span>
                            <span class="subheading" style="position: absolute; bottom: 0; left: 0; padding:12px;">
                              Album: {{song.album}}
                              <div class="subheading">Genre: {{song.genre}}</div>
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                      <v-card-actions>
                        <v-btn  @click="songLyrics(song.lyrics, song.youtubeId)" flat dark>Listen now</v-btn>
                        <v-btn  flat dark @click="$router.push({name: 'Edit song',  params: {id: song.id}})">Edit</v-btn>
                        <v-btn  flat dark @click="setAsBookmark" v-if="$store.state.isLoggedIn && !bookmark">Bookmark</v-btn>
                        <v-btn  flat dark @click="setAsUnbookmark" v-if="$store.state.isLoggedIn && bookmark">Unbookmark</v-btn>
                      </v-card-actions>
                    </v-card>
                        
                  </v-flex>

                  <v-dialog v-model="dialog3" max-width="500px">
                          <v-card>
                            <v-card-title>
                              <iframe width="500" height="315"
                                  :src="'https://www.youtube.com/embed/' + yt">
                              </iframe>     
                              <span>{{lyrics}}</span>
                              <v-spacer></v-spacer>
                            </v-card-title>
                            <v-card-actions>
                              <v-btn color="primary" flat @click.stop="dialog3=false">Close</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>

                </v-layout>
              
            </v-card>
            
      
</template>
<script>
import Panel from "../Panel";
import BookmarksService from "@/services/BookmarksService";


export default {
  async mounted() {

    let songID = this.$route.params.id;
    this.song = await this.$store.dispatch("retreiveSongById", songID);

    if(this.$store.state.isLoggedIn){

      this.bookmark = (await BookmarksService.index({ 
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data;

    }

    
  },
  data() {
    return {
      song: null,
      bookmark: null,
      dialog3: false,
      lyrics: null,
      yt: null
    };
  },
  methods: {
    songLyrics(lyrics, yt){
      if(this.lyrics != lyrics && this.yt != yt){
         this.lyrics = lyrics;
         this.yt = yt
      }
      
         this.dialog3 = true
     
    },
    async setAsBookmark(){

      try {
        const bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data;

        this.bookmark = bookmark;

      } catch (error) {
        console.log(error)
      }

    },
    async setAsUnbookmark(){

       try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        console.log(error)
      }

    }
  },
  components: {
    Panel
  }
};
</script>
<style>
  #songs{
  padding-top: 90px !important
}
.card{
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
