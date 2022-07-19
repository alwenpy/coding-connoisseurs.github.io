<template>
  <div>
    <div v-for="ele in devclubs" :key="ele.name" class="card text-white bg-dark ">
      <div class="card-body">
        <h5 class="card-title">{{ ele.name }}</h5>

        <p class="card-text">
          {{ ele.description }}
        </p>
        <div class="list-unstyled">
          <li>{{ ele.points1 }}</li>
          <li>{{ ele.points2 }}</li>
          <li>{{ ele.points3 }}</li>
          <li>{{ ele.points4 }}</li>
          <li>{{ ele.points5 }}</li>
          <li>{{ ele.points6 }}</li>
          <li>{{ ele.points7 }}</li>
          <li>{{ ele.points8 }}</li>
          <li>{{ ele.points9 }}</li>
          <li>{{ ele.points10 }}</li>
          <li>{{ ele.points11 }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import devclubs from '../data/codeofconduct.json';
export default {
  name: 'CodeofConduct',
  data() {
    return {
      devclubs,
    };
  },
};
</script>

<style scoped></style>
