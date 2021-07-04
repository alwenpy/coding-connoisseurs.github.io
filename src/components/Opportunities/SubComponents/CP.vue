<template>
  <div>
    <div v-for="ele in cp" :key="ele.id" class="card text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ ele.name }}</h5>
        <p class="card-text">
          {{ ele.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import cp from '../data/cp.json';
export default {
  name: 'CP',
  data() {
    return {
      cp: cp,
    };
  },
};
</script>

<style scoped></style>
