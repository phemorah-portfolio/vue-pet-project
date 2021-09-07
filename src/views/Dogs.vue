<template>
    <div>
         <PetTable 
            species="dog"
            :pets="dogs"
        />
    </div>
</template>

<script>
import PetTable from '@/components/PetTable'
import { mapState } from 'vuex'
export default {
    components: {
        PetTable
    },
    data() {
     return {}
    },
    computed: {
        ...mapState([
            'dogs'
        ])
    }
}
</script>