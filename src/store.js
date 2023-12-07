import { reactive } from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie',
    urlserie: 'https://api.themoviedb.org/3/search/tv',
    searchString: ""
});