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
    <img class="comp_img" src="../imgs/Codesandbox.svg">
    <div class="ch_div"> 
        <p> {{ computer_info.name }} </p>
        <div class="ch"> 
            <img class="os_img" src="../imgs/Monitor.svg"> <p> {{ computer_info.os }} </p>
            <img class="prc_img" src="../imgs/Cpu.svg"> <p> {{ computer_info.processor }} </p>
            <img class="mem_img" src="../imgs/Disc.svg">  <p> {{ computer_info.memory }} </p>
        </div>    
    </div>
    <div>
      <label for="date">Введите дату бронирования</label>
      <input
        v-model="date"
        type="date"
        id="date"
        name="date"
        @input="validateDate"
      />
    </div>
  </div>
</div>

</template>

<style src="../style.css">
</style>
