<script >
import { store } from "../store.js"

export default {
  name: "AppSearch",
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      console.log("Cerca: ", this.store.searchString);
      this.$emit("search");
    }
  },
  mounted() {

  }
}
</script>

<template>
  <header>
    <div class="nav">
      <h2>BOOLFLIX</h2>
      <input placeholder="Cerca..." v-model="store.searchString" @keyup.enter="$emit('search')">
    </div>
  </header>
</template>

<style scoped>
.nav {
  height: 68px;
  background-color: black;
  display: flex;
  justify-content: space-between;

}
</style>

<style scoped>
input {
  height: 46%;
  margin-top: 1.2rem;
}
</style>

<style scoped>
h2 {
  color: crimson;
  box-sizing: border-box;
  font-style: oblique;
  font-variant-position: super;
  margin-left: 1%;
}
</style>


 