<script>
export default {
  setup() {
  },
  data() {
    return {
    };
  },
  computed:{
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy () {
  },
  watch: {
    test: {
    handler(newVal, oldVal) {
    },
    deep: true,
  },
  }
};
</script>

<template>
  <header  v-if="$route.path === '/'">
    <div class="a1_div header_el"> 
        <a> Стенды </a>
        <a> Брони </a> 
    </div>
    <div class="a2_div header_el"> 
      <RouterLink to="/singin">Войти</RouterLink>
      <img class="header_img" src="./imgs/account_circle.svg"> 
    </div>
  </header>

  <RouterView />


</template>

<style src="./style.css">

</style>
