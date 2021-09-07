<template>
    <div>
        <PetTable 
            species="cat"
            :pets="cats"
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
            'cats'
        ])
    }
}
</script>

