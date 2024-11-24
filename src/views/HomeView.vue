<script >
import Card from "../components/Card.vue";
import { get_all } from "../API.js";

export default {
  data() {
    return {
        space_text:"",
        title: "Стенды",
        description:"*Все стенды ниже доступны для бронирования, нажмите на стенд чтобы посмотреть подробную информацию и забронировать.",
        typedTitle: "",
        typedDescription: "",
        showCursor1: true,
        showCursor2: true,
        token:null,
        filter_items:{
            os:"",
            processor:"",
            memory:"",
            status:"",
        },
        machine_info:[
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"512 MB",
                status:"Свободен",
                id:"",
            }, 
            {
                name:"Компьютер 1",
                os:"Windows",
                processor:"Baikal-M",
                memory:"512 MB",
                status:"Свободен",
                id:"",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-T1",
                memory:"512 MB",
                status:"Свободен",
                id:"",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
                status:"Забронирован",
                id:"",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
                status:"Свободен",
                id:"",
            },
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-T1",
                memory:"512 MB",
                status:"Свободен",
                id:"",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
                status:"Свободен",
                id:"",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
                status:"Забронирован",
                id:"",
            },
        ],
    };
  },
  components:{
    Card,
  },
  computed: {
    filtered_items(){
        let data = [];
        let f = true;
        this.machine_info.forEach(element => {
            if(element.os === this.filter_items.os || element.os == "" || !this.filter_items.os){
                if(element.processor === this.filter_items.processor || element.processor == "" || !this.filter_items.processor){
                    if(element.memory === this.filter_items.memory || element.memory == "" || !this.filter_items.memory){
                        if(element.status === this.filter_items.status || element.status == "" || !this.filter_items.status){
                            data.push(element);
                            f = false;
                        }
                    }
                }
            }
        });
        if(f){
            this.space_text = "Стенды не найдены.";
        } else{
            this.space_text = "";
        }
        return data;
    },
  },
  methods: {
    typeText(text, targetProperty, speed, callback) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          this[targetProperty] += text[index];
          index++;
        } else {
          clearInterval(interval);
          if (callback) callback(); // Вызываем callback после завершения
        }
      }, speed);
    },
  },
  
  mounted() {
    this.token = localStorage.getItem("token");
    if(this.token != null){
        this.machine_info = [get_all(this.token)];
        for(let i = 0; i < this.machine_info.length; i++){
            if(this.machine_info[i].status == "true"){
                this.machine_info[i].status = "Свободен";
            }
            else{
                this.machine_info[i].status = "Забронирован";
            }
        }
    }
    this.typeText(this.title, "typedTitle", 100, () => {
      this.showCursor1 = false; 
      this.typeText(this.description, "typedDescription", 35, () => {
        this.showCursor2 = false; 
      });
    });
  },
};
</script>

<template>
<main>
    <div class="circle_4"> </div>
    <div class="circle_5"> </div>
    <div class="circle_6"> </div>
    <div class="circle_7"> </div>
    <div class="info_div">
        <h1>{{ typedTitle }}<span v-if="showCursor1" class="cursor">|</span></h1>
        <p>{{ typedDescription }}<span v-if="showCursor2" class="cursor">|</span></p>
    </div>
        <div class="option_div"> 
            <div class="OS_div"> 
                <p> ОС </p>
                <select v-model="filter_items.os" id="os" name="os">
                    <option value="">Не указано</option>
                    <option value="Astra Linux">Astra Linux</option>
                    <option value="Windows">Windows</option>
                    <option value="macOS">macOS</option>
                </select>
            </div>
            
            <div class="processor_div"> 
                <p> Процессор </p>
                <select v-model="filter_items.processor" id="processor" name="processor">
                    <option value="">Не указано</option>
                    <option value="Baikal-T1">Baikal-T1</option>
                    <option value="Baikal-M">Baikal-M</option>
                    <option value="Baikal-S">Baikal-S</option>
                </select>
            </div>
            <div class="memory_div"> 
                <p> Объём памяти </p>
                <select v-model="filter_items.memory" id="memory" name="memory">
                    <option value="">Не указано</option>
                    <option value="512 MB">512 MB</option>
                    <option value="1 ГБ">1 ГБ</option>
                    <option value="2 ГБ">2 ГБ</option>
                </select>
            </div>
            <div class="status"> 
                <p> Статус </p>
                <select v-model="filter_items.status" id="status" name="status">
                    <option value="">Не указано</option>
                    <option value="Свободен">Свободен</option>
                    <option value="Забронирован">Забронирован</option>
                </select>
            </div>
        </div>
        <br>
        <div class="stends_fon_div">
            <div class="wrapper_stends">
                <Card v-for="item in filtered_items" :key="item" :computer_info="item"/>
                <p>{{ this.space_text }}</p>
            </div> 
        </div>
</main>
</template>

<style src="../style.css">
</style>
