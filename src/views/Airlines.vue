<template>
    <h1>Largest airlines in the world by passengers carried</h1>
  <div class="wrapper">
    <div v-for="airline in airlines" :key="airline.name" class="airline">
      <p>{{ airline.ranking }}. {{ airline.name }}</p>
      <p>{{ airline.country }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import allAirlines from "@/data/airlines.js";

export default {
  setup() {
    const airlines = ref(allAirlines);
    return { airlines };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
}

html {
  background-image: url("../assets/images/airplane1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

nav {
  margin-bottom: 50px;
}

nav a:hover {
  color: #adc8e4;
  padding: 10px;
  text-decoration: none;
}

nav a {
  color: #e7e7e7;
  padding: 10px;
  text-decoration: none;
}

.airline {
  margin: auto;
  width: 500px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e7e7e7;
}

.airline p:first-child {
  color: #e7e7e7;
  font-weight: bold;
  font-size: 27px;
  margin: 0;
}
.airline p:last-child {
  color: #e7e7e7;
  font-size: 20px;
}
</style>