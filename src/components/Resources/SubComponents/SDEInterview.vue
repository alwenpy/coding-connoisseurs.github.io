<template>
  <div>
    <h1 :style="{ textDecoration: 'underline' }">DSA</h1>

    <div v-for="ele in dsa" :key="ele.title" class="card text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ ele.title }}</h5>
        <p class="card-text">
          {{ ele.description }}
        </p>
        <a :href="`${ele.link}`">
          <button type="button" class="btn btn-light">Get Started</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import sderesources from '../data/sdeinterview.json';
export default {
  name: 'SDEInterview',
  data() {
    return {
      dsa: sderesources.dsa,
    };
  },
};
</script>

<style scoped></style>
