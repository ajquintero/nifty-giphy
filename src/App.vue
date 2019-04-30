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
            gifs: GiphyAPI.getPokemons(), 
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
        
        filteredPokemons() {
            return this.pokemons.filter(pokemon => {
                const hasType = !this.filter.type || pokemon.type_1 === this.filter.type;
                const hasAttack = !this.filter.attack || pokemon.attack >= this.filter.attack;
                return hasType && hasAttack;
            });
        },
        sortedPokemons() {
            const field = this.sort.field;
            return this.filteredPokemons.slice().sort((a, b) => {
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