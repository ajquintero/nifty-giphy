<template>
    <ul>
        <Gif v-for="gif in gifs"
        v-bind:key="gifs.gif"
        v-bind:gif="gif"/>
    </ul>
</template>

<script>
import Gifs from './Gifs';
export default {
    props: {
        Gifs: Array
    },
    
    components: {
        Gifs
    }
};
</script>

<style scoped>
    ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-column-gap: 15px;
            grid-row-gap: 15px;
            list-style-type: none;
            margin: 0;
            padding: 0;
        };
</style>