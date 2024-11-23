<script >
import Card from "../components/Card.vue";
export default {
  data() {
    return {
        filter_items:{
            os:"",
            processor:"",
            memory:"",
        },
        machine_info:[
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"512 MB",
            }, 
            {
                name:"Компьютер 1",
                os:"Windows",
                processor:"Baikal-M",
                memory:"512 MB",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-T1",
                memory:"512 MB",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
            },
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-T1",
                memory:"512 MB",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
            }, 
            {
                name:"Компьютер 1",
                os:"Astra Linux",
                processor:"Baikal-M",
                memory:"1 ГБ",
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
        this.machine_info.forEach(element => {
            if(element.os === this.filter_items.os || element.os == "" || !this.filter_items.os){
                if(element.processor === this.filter_items.processor || element.processor == "" || !this.filter_items.processor){
                    if(element.memory === this.filter_items.memory || element.memory == "" || !this.filter_items.memory){
                        data.push(element);
                        //console.log("Im here!");
                    }
                }
            }
        });
        return data;
    },
  },
  methods: {
    
  },
  
  mounted() {
    
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
            <h1>Стенды</h1>
            <p>*Все стенды ниже доступны для бронирования, нажмите на стенд чтобы посмотреть подробную информацию и забронировать.</p>
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
        </div>
        <br>
        <div class="stends_fon_div">
            <div class="wrapper_stends">
                <Card v-for="item in filtered_items" :key="item" :computer_info="item"/>
            </div> 
        </div>
</main>
</template>

<style src="../style.css">
</style>
