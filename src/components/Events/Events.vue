<template>
  <div class="container">
    <div class="display-3 fw-bold">Events</div>

    <!-- <div class="divider" /> -->
    <Tabs
      :data="[
        {
          tabName: 'UpComing Events',
          route: '/events/upcoming',
        },

        {
          tabName: 'Code Of Conduct',
          route: '/events/codeofconduct',
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
  name: 'Events',
  mounted() {
    this.$router.replace('/events/upComing');
  },
  components: {
    Tabs,
  },
};
</script>

<style scoped></style>
