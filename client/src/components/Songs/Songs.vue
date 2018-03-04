<template>
  <v-container grid-list-xl fill-height id="songs">
    <v-layout row wrap align-center>
      
        <panel>
            <router-view v-if="$route.name != 'Songs'"></router-view>
            <v-card  v-if="$route.name == 'Songs' && $store.getters.allSongs">
                <v-layout row wrap>
                  <v-flex xs12 lg6 v-for="song in $store.getters.getSearchResult || $store.getters.allSongs" :key="song.id">
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
                        <v-btn  @click="$router.push({name: 'View song',  params: {id: song.id}})" flat dark>View song </v-btn>
                        <v-btn  flat dark @click="$router.push({name: 'Edit song',  params: {id: song.id}})">Edit</v-btn>
                      </v-card-actions>
                    </v-card>
                        
                  </v-flex>

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
