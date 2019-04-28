<template>
    
    <header>
        <h1>Nifty Giphy!</h1>
        <label>
            Search a Gif:
            <input type="string"
                v-model.number="filter.attack"
                step="20"
            >
        </label>


        <label>
            Filter By Rating:
            <select v-model="sort.field">
                <option value="pokemon">Highest to Lowest</option>
    
            </select>

        </label>

        
    </header>

</template>

<script>
export default {
    props: {
        types: Array,
        filter: Object,
        sort: Object
        
    }
};
</script>

<style scoped>
header {
  background: #DC0B2D;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
}
</style>