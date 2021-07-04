<template>
  <div>
    <div v-for="ele in opensource" :key="ele.id" class="card text-white bg-dark mb-3">
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
import ops from '../data/ops.json';
export default {
  name: 'Opensource',
  data() {
    return {
      opensource: ops,
    };
  },
};
</script>

<style scoped></style>
