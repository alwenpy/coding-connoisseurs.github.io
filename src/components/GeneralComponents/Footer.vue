<template>
  <div class="mt-5">
    <div class="footer container">
      <div class="col pt-5">
        <a class="btn discord" href="http://discord.gg/QGZc57Y9yq" target="_blank"
          ><img src="../../assets/discord.svg" :style="{ width: '50px' }"
        /></a>
        <a class="btn github" href="https://github.com/Coding-Connoisseurs/" target="_blank"
          ><img src="../../assets/github.svg"  :style="{ width: '50px' }"
        /></a>
        <a class="btn linkedin" href="https://www.linkedin.com/company/coding-connoiseurs/" target="_blank"
          ><img src="../../assets/linkedin.svg" :style="{ width: '50px' }"
        /></a>
        <a class="btn instagram" href="https://www.instagram.com/cod.ngclub/" target="_blank"
          ><img src="../../assets/instagram.svg" :style="{ width: '50px' }"
        /></a>
        <a class="btn youtube" href="http://www.youtube.com/channel/UCfaEKlZXHP1SRc-rSDSi1tg" target="_blank"
          ><img src="../../assets/youtube.svg" :style="{ width: '50px' }"
        /></a>
      </div>
      <div class="row pt-5 pb-3">
        <div class="col-md-6 col-sm-12">
          &copy; Coding Connoisseurs, FoET, University of Lucknow
        </div>
        <div class="col-md-6 col-sm-12 text-sm-start text-end">
          Made by <a href="http://github.com/arjundubey-cr" target="_blank" >Arjun Dubey</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.col a {
  padding: 5px;
}
.btn {
  border-radius: 50%;
}
.youtube:hover {
  color: #fff;
  background-color: rgba(255, 0, 0, 0.5);
}
.discord:hover {
  background-color: rgba(64, 78, 237, 0.5);
}
.github:hover {
  background-color: rgba(33, 31, 31, 0.5);
}
.linkedin:hover{
  background-color: rgba(10, 102, 194,0.5);
}
.instagram:hover{
  background-color: rgba(221,42, 123,0.5);
}
</style>
