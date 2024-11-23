<script >
export default {
  data() {
    return {

    };
  },

  props:{
    computer_info:{}
  },

  computed: {
  },

  methods: {
    
  },
  
  mounted() {
    
  },
};
</script>

<template>
<div class="stend1"> 
    <img class="comp_img" src="../imgs/Codesandbox.svg">
    <div class="ch_div"> 
        <p> {{ computer_info.name }} </p>
        <div class="ch"> 
            <img class="os_img" src="../imgs/Monitor.svg"> <p> {{ computer_info.os }} </p>
            <img class="prc_img" src="../imgs/Cpu.svg"> <p> {{ computer_info.processor }} </p>
            <img class="mem_img" src="../imgs/Disc.svg">  <p> {{ computer_info.memory }} </p>
        </div>    
    </div>
</div>
</template>

<style src="../style.css">
</style>
