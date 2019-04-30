<template>
  <div id="app">
    <Header 
      v-bind:sort="sort"
      v-bind:types="pokemonTypes"
      v-bind:filter="filter"
    />
    <GiphySearch v-bind:gifs="sortedGifs" />
  </div>
</template>

<script>
import GiphyAPI from './giphyAPI.js';
import Gifs from './components/Gifs';
import Header from './components/Header';
export default {
    data() {
        return {
            gifs: GiphyAPI.getGifs(), 
            filter: {
                type: '',
                attack: 0,
                defense: 0
            },
            sort: {
                field: 'name',
                
            }
        };
    },
    components: {
        Gifs,
        Header
    },
    
    computed: {
        pokemonTypes() {
            const types = [];
            this.pokemons.forEach(pokemon => {
                if(!types.includes(pokemon.type_1)) {
                    types.push(pokemon.type_1);
                }
            });
            return types;
        },
        
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