<script>
import AppSearch from './components/AppSearch.vue'
import AppFilm from './components/AppFilm.vue'
import { store } from "./store.js" //state management
import axios from 'axios';

export default {
  components: {
    AppSearch,
    AppFilm
  },


  data() {

    return {
      search: "",
    }

  },

  mounted() {
    this.getSearch();
  },

  methods: {
    getSearch() {
      axios.get('d2c87a340967a34eddbd93b646618b50').then(risultato => {
        this.search = risultato.data
      })

    }
  },

  getAppFilm() {
    this.search = "https://api.themoviedb.org/3/search/movie"
    axios.get(``).then(risultato => {
      this.search = risultato.data
    })


  }
}




</script>

<template>
  <header>
    <AppSearch @search="getAppFilm" />
  </header>
  <main>
    <AppFilm :arrayGenerato="search" />
  </main>
</template>

<style scoped></style>
