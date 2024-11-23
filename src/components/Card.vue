<script >
import { book } from "../API.js";
export default {
  data() {
    return {
      bonus_info: false,
      date: null,
      token:null,
      ssh:null,
      access: false,
      load: false,
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
      if (!this.$el.contains(e.target) && !e.target.closest('.pop-up') && !e.target.closest('.stend1') && !e.target.closest('.grey1_div')) { 
        this.bonus_info = false;
      }
    },
    async booking(){
      try{
        this.load = true
      const data = await book(this.computer_info.id, this.token);
      if(data != "error"){
        this.ssh = data.ssh;
        this.access = true;
      }
      this.load = false;
      }
      catch{
        this.load = false;
      }
      
    }
  },
  
  mounted() {
    document.addEventListener('click', this.close.bind(this));
    this.token = localStorage.getItem('token');
  },

  beforeDestroy () {
    document.removeEventListener('click',this.close);
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
            <div :class="{red_status: computer_info.status === 'Забронирован'}" class="status_div"> <p class="p_grey1"> {{ computer_info.status }} </p> </div>
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
          <div @click="booking" v-if="computer_info.status === 'Свободен' && !access && !load" class="grey1_div"> <p class="p_grey1"> Забронировать </p> </div>
          <img v-if="load" class="load_img" src="../imgs/Loader.svg">
          <div class="" v-if="access">
            <p>id стенда: {{ computer_info.id }}</p>
            <p>ssh ключ: {{ this.token }}</p>
            <p class="sub_text">нажмите чтобы скопировать и воспользуйтесь консолью</p>
            <p class="sub_text">*После обновления страницы токен получить нельзя!</p>
          </div>
  </div>
</div>
</template>

<style src="../style.css">
</style>
