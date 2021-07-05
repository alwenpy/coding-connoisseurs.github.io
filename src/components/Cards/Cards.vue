<template>
  <div class="col">
    <div :style="{ backgroundColor: color }" class="card text-white" @click="handleClick">
      <div class="card-body">
        <h1 class="card-title">{{ heading }}</h1>
        <div class="divider"></div>
        <p class="card-text">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: ['heading', 'content', 'routerLink', 'color'],
  methods: {
    handleClick() {
      this.$router.replace(this.routerLink);
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border-radius: 0;
}
.card {
  height: 400px;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.divider {
  border: 1px solid #fff;
  width: 100%;
}
</style>
