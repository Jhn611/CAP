<script>
export default {
  setup() {
    
  },
  data() {
    return {
      email:"Войти",
    };
  },
  computed:{
  },
  methods: {
    redirect(){
      if(this.email != "" && this.email){
        localStorage.setItem("email", "");
        localStorage.setItem("token", "");
        localStorage.setItem("role", "");
        localStorage.setItem("id", "");
        this.email = "Войти";
      }
    }
  },
  mounted() {
    const email = localStorage.getItem("email");
    if(email){
      this.email = email;
    }else{
      this.email = "Войти";
    }
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
    <div @click="redirect" class="a2_div header_el"> 
      <RouterLink to="/singin">{{ email }}</RouterLink>
      <img class="header_img" src="./imgs/account_circle.svg"> 
    </div>
  </header>

  <RouterView />


</template>

<style src="./style.css">

</style>
