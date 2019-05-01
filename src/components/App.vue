<template>
  <div id="app">
    <Header 
      v-bind:sort="sort"
      v-bind:types="gifTypes"
      v-bind:filter="filter"
    />
    <input v-model="gifSearch" type="text">
    <button class="button" @click=findGifs()>Search</button>
    <div class="gif-container">
      <img v-for="gif in gifs" :src="gif" :key="gif.id">
    </div>
  </div>
</template>

<script>
import GiphyAPI from './giphyAPI.js';
import Gifs from './components/Gifs';
import Header from './components/Header';
export default {
    data() {
        return {
            gifTerm: '', 
            gifs: []
        };
    },
    methods: {
        findGifs() {

            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    this.renderGifs(json);
                })
                .catch(err => console.log(err));
        },
        renderGifs(json) {
            this.gifs = json.data.map(gif => gif.id).map(gifId => {
                return `https://media.giphy.com/media/${gifId}/giphy.gif`;
            });
        }
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Gifs,
        Header
    },
    
    computed: {

        
        filteredGifs() {
            return this.gifs.filter(gif => {
                const hasRating = !this.filter.rating || gif.rating === this.filter.rating;
                return hasRating;
            });
        },
        sortedGifs() {
            const field = this.sort.field;
            return this.filteredGifs.slice().sort((a, b) => {
                if(a[field] > b[field]) {
                    return 1;
                }
                if(a[field] < b[field]) {
                    return -1;
                }
                return 0;
            });    
        }
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>