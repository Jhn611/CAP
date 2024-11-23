<script >
export default {
  data() {
    return {
      bonus_info: false,
      date: null,
    };
  },

  props:{
    computer_info:{}
  },

  computed: {
    
  },

  methods: {
    card_click(){
      this.bonus_info = true;
    },
    close(e) {
      if (!this.$el.contains(e.target) && !e.target.closest('.pop-up') && !e.target.closest('.stend1')) { 
        this.bonus_info = false;
      }
    },
  },
  
  mounted() {
    document.addEventListener('click', this.close.bind(this))
  },

  beforeDestroy () {
    document.removeEventListener('click',this.close)
  },
};
</script>

<template>

<div @click="card_click" class="stend1"> 
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
  

<div v-if="bonus_info" class="stend_info_bg"></div>
<div v-if="bonus_info" class="pop-up">
  <div class="stend_info"> 
      <div class="comp_img_ch1_div">
          <img class="comp_img" src="../imgs/Codesandbox.svg">
          <div class="ch_div"> 
              <p> <b> Компьютер 1 </b> </p>
              <div class="ch"> 
                  <img class="os_img" src="../imgs/Monitor.svg"> <p> Astra Linux </p>
                  <div> </div> <div> </div> <div> </div> <div> </div>
                  <img class="prc_img" src="../imgs/Cpu.svg"> <p> Baikal </p>
                  <div> </div> <div> </div> <div> </div> <div> </div>
                  <img class="mem_img" src="../imgs/Disc.svg">  <p> 512 MB </p>
              </div>    
          </div>
          </div>
          <div class="grey1_div"> <p class="p_grey1"> Забронировать </p> </div>
  </div>
</div>

</template>

<style src="../style.css">
</style>
