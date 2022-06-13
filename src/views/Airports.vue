<template>
  <h1>The top 10 busiest airports in the world by passenger number</h1>
  <div>
    <div
      v-for="airport in airports"
      :key="airport.abbreviation"
      class="airport"
    >
      <p>{{ airport.ranking }}. {{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.country }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import allAirports from "@/data/airports.js";

export default {
  setup() {
    const airports = ref(allAirports);
    return { airports };
  },
};
</script>

<style>
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
  color:#e7e7e7;
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

h1 {
  margin: auto;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 10px;
  width: 800px;
  color: #e7e7e7;
  border-bottom: 2px solid #e7e7e7;
}

.intro {
    margin: auto;
    width: 800px;
    padding: 20px;
    color: rgb(1, 35, 87);
    border-radius: 15px;
    background-color: rgb(203, 213, 216 , 0.4);
}

.airport {
  margin: auto;
  width: 500px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e7e7e7;
}

.airport p:first-child {
  color: #e7e7e7;
  font-weight: bold;
  font-size: 27px;
  margin: 0;
}
.airport p:last-child {
  color: #e7e7e7;
  font-size: 15px;
}
</style>