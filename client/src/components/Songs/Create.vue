<template>
  <div>
   <v-layout row wrap>
      <v-flex lg4 sm4 xs12>
         <v-text-field
            label="Title"
            v-model="title"
            :error-messages="titleErrors"
            @input="$v.title.$touch()"
            @blur="$v.title.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Artist"
            v-model="artist"
            :error-messages="artistErrors"
            @input="$v.artist.$touch()"
            @blur="$v.artist.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Genre"
            v-model="genre"
            :error-messages="genreErrors"
            @input="$v.genre.$touch()"
            @blur="$v.genre.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Album"
            v-model="album"
            :error-messages="albumErrors"
            @input="$v.album.$touch()"
            @blur="$v.album.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Album image"
            v-model="albumImage"
            :error-messages="albumImageErrors"
            @input="$v.albumImage.$touch()"
            @blur="$v.albumImage.$touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Youtube Id"
            v-model="youtubeId"
            :error-messages="youtubeIdErrors"
            @input="$v.youtubeId.$touch()"
            @blur="$v.youtubeId.$touch()"
            required
          ></v-text-field>

          <v-btn @click="submit">submit</v-btn>
      </v-flex>
      <v-flex xs12  lg8 sm8 >
        <v-text-field
            label="Lyrics"
            v-model="lyrics"
            multi-line
          ></v-text-field>
          <v-text-field
            label="Tab"
            v-model="tab"
            multi-line
          ></v-text-field>
      </v-flex>
   </v-layout>
      
  </div>
</template>
<script>
import ValidationMixin from './ValidateMixin.js';
import SongsService from "@/services/SongsService";

export default {
    
  mixins: [ValidationMixin],

  data(){
      return {
        "title":  "",
        "artist": "",
        "genre": "",
        "album":  "",
        "albumImage":  "",
        "youtubeId":  "",
        "lyrics":  "",
        "tab":  ""
      }
  },
  methods: {
    submit () {
      this.$v.$touch();

      if(this.$v.$invalid) return; 

      SongsService.post(this.$data)
                    .then(res => this.$router.push({ 
                        name: "Songs" 
                    }));
    },
  }
}
</script>
