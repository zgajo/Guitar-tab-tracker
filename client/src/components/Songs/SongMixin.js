import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
      title: { required,},
      artist: { required,  },
      genre: { required },
      album: { required },
      albumImage: { required },
      youtubeId: { required }
    },
  computed: {
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.required && errors.push('Title is required!')
      return errors
    },
    artistErrors () {
      const errors = []
      if (!this.$v.artist.$dirty) return errors
      !this.$v.artist.required && errors.push('Artist is required')
      return errors
    },
    genreErrors () {
      const errors = []
      if (!this.$v.genre.$dirty) return errors
      !this.$v.genre.required && errors.push('Genre is required!')
      return errors
    },
    albumErrors () {
      const errors = []
      if (!this.$v.album.$dirty) return errors
      !this.$v.album.required && errors.push('Album is required!')
      return errors
    },
    albumImageErrors () {
      const errors = []
      if (!this.$v.albumImage.$dirty) return errors
      !this.$v.albumImage.required && errors.push('Album image is required!')
      return errors
    },
    youtubeIdErrors () {
      const errors = []
      if (!this.$v.youtubeId.$dirty) return errors
      !this.$v.youtubeId.required && errors.push('Youtube id is required!')
      return errors
    }
  },
}