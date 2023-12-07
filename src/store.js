import { reactive } from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/movie',
    urlserie: 'https://api.themoviedb.org/3/search/tv',
    urlimg: "https://image.tmdb.org/t/p/w500/images?api_key=d2c87a340967a34eddbd93b646618b50&query=${store.searchString}",
    searchString: ""
});