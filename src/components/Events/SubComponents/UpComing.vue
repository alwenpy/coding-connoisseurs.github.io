<template>
  <div>
    <div v-for="ele in opensource" :key="ele.id" class="card text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ ele.name }}</h5>
        <p class="card-text">
          {{ ele.description }}
        </p>
      
        <p>
          <strong>Duration:</strong>
          {{ ele.applicationPeriod }}
        </p>
     
      
      </div>
    </div>
  </div>
</template>

<script>
import ops from '../data/events.json';
export default {
  name: 'upComing',
  data() {
    return {
      opensource: ops,
    };
  },
};
</script>

<style scoped></style>
