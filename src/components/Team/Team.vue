<template>
  <div class="container">
    <div class="display-3 fw-bold">Our Team</div>
    <div class="row">
      <div class="col" v-for="member in teamdata" :key="member.githubHandle">
        <div class="card text-center">
          <img
            :src="`https://github.com/${member.githubHandle}.png`"
            class="card-img-top"
            :alt="`${member.githubHandle}'s Profile Picture`"
          />
          <div class="card-body">
            <h5 class="card-title">{{ member.name }}</h5>
            <p class="card-text">
              <a class="btn btn-primary" :href="`https://github.com/${member.githubHandle}`"
                >View On Github</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.json';
export default {
  name: 'Team',
  data() {
    return {
      teamdata: data,
    };
  },
};
</script>

<style scoped></style>
