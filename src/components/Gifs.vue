<template>
    <li>
        <img v-bind:src="gif.url_image" />
        <div v-bind:style="{ color:gif.color_1}" class="info">
            <h3>{{ gif.url_image }}</h3>
            <p>search term: {{ gif.attack }}</p>
            <p>rating: {{ gif.rating }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        gif: Object
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