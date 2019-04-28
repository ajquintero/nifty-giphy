<template>
    <li>
        <img v-bind:src="pokemon.url_image" />
        <div v-bind:style="{ color:pokemon.color_1}" class="info">
            <h3>{{ pokemon.pokemon }}</h3>
            <p>type 1: {{ pokemon.type_1 }}</p>
            <p>type 2: {{ pokemon.type_2 }}</p>
            <p>attack: {{ pokemon.attack }}</p>
            <p>defense: {{ pokemon.defense }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        pokemon: Object
    }
};
</script>

<style>
    li {
        position: relative;
        height: 420px;
        border: 2px solid black;
        background: black;
    }
    img {
        position: absolute;
        top: 0;
        left: 30px;
        width: 80%;
        height: 70%;
        z-index: 1;
        object-fit: cover;
    }
    .info {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 130px;
        background: rgba(255, 255, 255);
        line-height: 0.4em;
        font-size: 1em;
    }
</style>