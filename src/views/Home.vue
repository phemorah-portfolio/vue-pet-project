<template>
  <div class="home-view-container">
        <div class="position-relative p-4 bg-info">
          <p class="text-light font-weight-bold">Total Pets: {{ animalsCount }}</p>
          <b-card>

            <h1>Adopt a new best friend.</h1>

            <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

            <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
              <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="formData.name"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Species:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="formData.species"
                  :options="['cats','dogs']"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="formData.age"
                  placeholder="Enter age"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>

          </b-card>
          <!-- <p class="text-light font-weight-bold mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed:{
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      // Reset form after being submitted
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
