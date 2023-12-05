<script>
import AppSearch from './components/AppSearch.vue'
import AppFilm from './components/AppFilm.vue'
import { store } from "./store.js" //state management
import axios from 'axios';
import { pushScopeId } from 'vue';

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
      axios.get('https://api.themoviedb.org/3/search/movie').then(risultato => {
        this.search = risultato.data
        console.log(this.search)
      })

    },
    getAppFilm() {
      this.search = ""
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d2c87a340967a34eddbd93b646618b50&query=matrix`,).then(risultato => {
        this.search = risultato.data
        console.log(this.search)
      })
    }
  },

}

</script>
<template>
  <header>
    <AppSearch @search="getAppFilm" />
  </header>
  <main>
    <AppFilm :arrayGenerato="getSearch" />
  </main>
</template>

<style scoped></style>
