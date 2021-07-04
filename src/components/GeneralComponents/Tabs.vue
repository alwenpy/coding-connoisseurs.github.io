<template>
  <ul class="row menu-links">
    <li v-for="ele in data" :key="ele.tabName" class="col-12 col-md-5 col-lg-auto m-md-1">
      <router-link :to="ele.route">
        <div class="link-name">{{ ele.tabName }}</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',
  props: ['data'],
};
</script>

<style scoped>
.menu-links {
  list-style-type: none;
  display: flex;
  padding: 0;
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
</style>
