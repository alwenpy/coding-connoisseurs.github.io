<template>
  <div>
    <p v-for="ele in opensource" :key="ele.id">
      {{ ele.name }}
      {{ ele.description }}
    </p>
  </div>
</template>

<script>
import ops from '../ops.json';
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
