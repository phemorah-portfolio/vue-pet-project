<template>
    <div>
        <p>Total {{ capitalizeFirstLetter(species) | pluralize(10) }} : {{ petData.length }}</p>
        <h1>{{ capitalizeFirstLetter(species) | pluralize(10) }} for Adoption</h1>
        <b-table striped hover :items="pets">
            <template #cell(name)="data">
            <!-- <template slot="age" slot-scope="data"> -->
                <router-link :to="`/pet/${species}/${data.index}`">
                 {{ data.value }}
                </router-link>
            </template>    
        </b-table> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        species: String,
        pets: Array
    },   
    data ()  {
        return {
            petData: {}
        }
    },
    methods : {
        capitalizeFirstLetter: (str) => {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    computed:{
        ...mapGetters([
            'getAllCats','allPets'
        ])
    },
    mounted () {
        // debugger
        console.log(this.species)
        this.petData = this.allPets(this.species);
    }
}
</script>