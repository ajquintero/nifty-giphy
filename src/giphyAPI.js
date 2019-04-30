/* eslint-disable no-undef */
import gifs from './components/Gifs.vue';


export default {
    getGifs() {
        return gifs = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=RyRi8wCZBqDhCjXXwE5bklzJjfJ1nV0Y&limit=5");
       
    }
};