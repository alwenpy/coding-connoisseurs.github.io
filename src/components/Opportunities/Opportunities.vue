<template>
  <div class="container">
    <div class="display-3 fw-bold">Opportunities</div>
    <div class="divider" />

    <ul class="row menu-links">
      <li class="col-12 col-md-auto">
        <router-link to="/opportunities/opensource">
          <div class="empty-box col-1 col-md-2">&check;</div>
          <div class="link-name col-md-10 col-11">Open Source</div>
        </router-link>
      </li>
      <li class="col-12 col-md-auto">
        <router-link to="/opportunities/cp">
          <div class="empty-box col-1">&check;</div>
          <div class="link-name col-11">Competitive Programming</div>
        </router-link>
      </li>
      <li class="col-12 col-md-auto">
        <router-link to="/opportunities/scholarship">
          <div class="empty-box col-1">&check;</div>
          <div class="link-name col-11">Scholarships and Fellowship</div>
        </router-link>
      </li>
      <li class="col-12 col-md-auto">
        <router-link to="/opportunities/developerclubs">
          <div class="empty-box col-1">&check;</div>
          <div class="link-name col-11">Internship and Job</div></router-link
        >
      </li>
    </ul>

    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'Opportunities',
  mounted() {
    this.$router.push('/opportunities/opensource');
  },
};
</script>

<style scoped>
.divider {
  border: 1px solid #e5e5e5;
}
.menu-links {
  list-style-type: none;
  display: flex;
}
.menu-links li {
  text-align: center;
  font-size: 1.2rem;
  padding-left: 0;
  padding-right: 0;
  margin-right: 1.2rem;
  border: 1px solid #e5e5e5;
}
.menu-links li a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.link-name {
  padding: 5px;
}
.empty-box {
  width: 30px;
  color: #fff;
  border-right: 1px solid #e5e5e5;
}
.router-link-active {
  background-color: #373634;
  color: #fff !important;
}

@media screen and (max-width: 760px) {
  .menu-links li {
    font-size: 1rem;
  }
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
