<template>
  <div class="container">
    <div class="display-3 fw-bold">Resources</div>
    <Tabs
      :data="[
        {
          tabName: 'SDE Interview Resources',
          route: '/resources/sdeinterview',
        },
        {
          tabName: 'Roadmaps',
          route: '/resources/roadmaps',
        },
        {
          tabName: 'PM Resources',
          route: '/resources/pmresources',
        },
        {
          tabName: 'UI/UX Resources',
          route: '/resources/uiuxresources',
        },
      ]"
    />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Tabs from '../GeneralComponents/Tabs.vue';
export default {
  name: 'Resources',
  mounted() {
    this.$router.replace('/resources/sdeinterview');
  },
  components: {
    Tabs,
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
