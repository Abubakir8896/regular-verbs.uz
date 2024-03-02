<template>
    <div style="display: flex; justify-content:center; font-size: 20px;">
        <h1>Regular Verbs</h1>
    </div>
    <div style="display:flex; justify-content: center; margin-bottom: 10px;">
      <input v-model="title" type="text" style=" padding: 10px; border-radius: 10px; ;width: 550px; border: 1px solid black" placeholder="Search">
      <button @click="searchProducts" style="border:1px solid #07a8f2; color:#fff; width: 100px; border-radius: 10px; margin-left: 5px; background-color: #07a8f2;">Search</button>
    </div>
    <div>
        <div style="display: flex; border:1px solid gray; justify-content:space-around; padding: 30px; background-color: orange;">
            <h2>Verb 1</h2>
            <h2>Verb 2</h2>
            <h2>Verb 3</h2>
        </div>
        <div style="border: 1px solid black;">            
            <div style="display: flex; border:1px solid gray; justify-content:space-around; padding: 30px;" v-for="user in users.forms" :key="user.form_id">
                <h3>{{ user.verb1 }}</h3>
                <h3>{{ user.verb2 }}</h3>
                <h3>{{ user.verb3 }}</h3>
            </div>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import axios from "axios";
import { log } from "console";
  import { useToast } from "vue-toastification";
  import { ref } from "vue";
  const toast = useToast();
  export default {
    name: "AdminPage",
    data() {
      return {
        texte: [],
        users: [],
        loading: false,
        title: ref('')
      };
    },    
    mounted: async function () {
      this.loading = true;
      const response = await axios.get("http://localhost:4000/api/form/all");
      if (response.status === 200) {
      this.users = await response.data;
      console.log(this.users);
      
    }else {
        console.error(`Serverdan xato: ${response.status}`);
      }
      this.loading = false;
      const response1 = await axios.get("http://localhost:4000/api/form/all");
      if (response.status==200) {
        this.texte = await response1.data
      } else {
        console.error(`Serverdan xato: ${response1.status}`);
      }
    },
    methods: {
      async searchProducts(){
      this.loading = true;
      const response = await axios.get(`http://localhost:4000/api/form/searche/${this.title}`);
      if (response.status === 200) {
      this.users = await response.data;
      console.log(this.users);
      
    }else {
        console.error(`Serverdan xato: ${response.status}`);
      }
      this.loading = false;
      const response1 = await axios.get(`http://localhost:4000/api/form/searche/${this.title}`);
      if (response.status==200) {
        this.texte = await response1.data
      } else {
        console.error(`Serverdan xato: ${response1.status}`);
      }
      }
    }
  };
  </script>
  