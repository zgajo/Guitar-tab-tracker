<template>
  <v-container grid-list-xl fill-height id="songs">
    <v-layout row wrap align-center>
      
        <panel>
            <router-view v-if="$route.name != 'Songs'"></router-view>
            <v-card  v-if="$route.name == 'Songs' && $store.getters.allSongs">
                <v-layout row wrap>
                  <v-flex xs12 lg6 v-for="song in $store.getters.allSongs" :key="song.id">
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
            
        </panel>
      </v-layout>
  </v-container>
</template>
<script>
import Panel from "../Panel";

export default {
  async mounted() {
    await this.$store.dispatch("retreiveSongs")
  },
  data() {
    return {
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
