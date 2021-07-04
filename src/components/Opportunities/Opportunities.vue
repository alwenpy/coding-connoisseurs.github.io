<template>
  <div class="container">
    <div class="display-3 fw-bold">Opportunities</div>
    <div class="divider" />
    <div class="row">
      <ul class="menu-links">
        <li>
          <router-link to="/opportunities">
            <div class="empty-box">&check;</div>
            <div class="link-name">Open Source</div>
          </router-link>
        </li>
        <li>
          <router-link to="/opportunities/cp">
            <div class="empty-box">&check;</div>
            <div class="link-name">Competitive Programming</div>
          </router-link>
        </li>
        <li>
          <router-link to="/scholarships">
            <div class="empty-box">&check;</div>
            <div class="link-name">Scholarships</div>
          </router-link>
        </li>
        <li>
          <router-link to="/developerclubs">
            <div class="empty-box">&check;</div>
            <div class="link-name">Open Source</div></router-link
          >
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import ops from './ops.json';
export default {
  name: 'Opportunities',
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
  margin-right: 1.2rem;
  border: 1px solid #e5e5e5;
}
.menu-links li a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
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
    padding: 0.75rem;
  }
}
</style>
