<template>
  <div id="app">
    <Header 
      v-bind:sort="sort"
      v-bind:types="gifTypes"
      v-bind:filter="filter"
    />
    <input v-model="gifSearch" type="text">
    <button class="button" v-on:click=findGifs()>Search</button>
    <div class="gif-container">
      <img v-for="gif in gifs" :src="gif" :key="gif.id">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            gifTerm: '', 
            gifs: []
        };
    },
    methods: {
    
        findGifs() {
            let apiKey = 'RyRi8wCZBqDhCjXXwE5bklzJjfJ1nV0Y';
            let searchEndPoint = 'https://api.giphy.com/v1/gifs/search?';
            let limit = 5;
            let url = `${searchEndPoint}&api_key=${apiKey}&q=${
                this.searchTerm
            }&limit=${limit}`;
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
  background: #12c2e9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  
background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); 

}
</style>