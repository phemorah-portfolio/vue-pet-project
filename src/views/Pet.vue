<template>
    <div>
        <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
        <p>Age: {{ animal.age }} years old</p>
        <p>Breed: {{ animal.breed }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            animal: {}
        }
    },
    computed: {
        ...mapState([
            'cats',
            'dogs'
        ])
    },
    mounted() {
        let specie = [this.$route.params.species]+'s'                   
        this.animal = this.[specie][this.$route.params.id]                    
    }
}
</script>