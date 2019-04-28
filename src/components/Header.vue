<template>
    
    <header>
        <h1>Pokedex Round 2!</h1>
        <label>
            Attack:
            <input type="number"
                v-model.number="filter.attack"
                step="20"
            >
        </label>

        <label>
            Type:
            <select v-model="filter.type">
                <option value="">All</option>
                <option
                    v-for="type in types"
                    v-bind:key="type"
                    v-bind:value="type">
                    {{type}}
                </option>
            </select>
        </label>

        <label>
            Sort By:
            <select v-model="sort.field">
                <option value="pokemon">Name</option>
                <option value="type_1">Type</option>
                <option value="attack">Attack</option>
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