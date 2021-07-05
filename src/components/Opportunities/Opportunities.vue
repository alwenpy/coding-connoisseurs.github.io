<template>
  <div class="container">
    <div class="display-3 fw-bold">Opportunities</div>
    <!-- <div class="divider" /> -->
    <Tabs
      :data="[
        {
          tabName: 'Open Source',
          route: '/opportunities/opensource',
        },
        {
          tabName: 'Competitive Programming ',
          route: '/opportunities/cp',
        },
        {
          tabName: 'Scholarship',
          route: '/opportunities/scholarship',
        },
        {
          tabName: 'Internship and Jobs',
          route: '/opportunities/internshipandjobs',
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
  name: 'Opportunities',
  mounted() {
    this.$router.replace('/opportunities/opensource');
  },
  components: {
    Tabs,
  },
};
</script>

<style scoped>
.divider {
  border: 1px solid #e5e5e5;
}
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
