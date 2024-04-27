<template>
  <AppHeader />
  <AppLengthLetter />
  <AppAlphabet />
  
  
</template>

<script>
import axios from 'axios';
import {store} from './store.js'
import AppHeader from './components/AppHeader.vue';
import AppAlphabet from './components/AppAlphabet.vue';
import AppLengthLetter from './components/AppLengthLetter.vue';




  export default {
    components: {
      AppHeader,
      AppAlphabet,
      AppLengthLetter,
    },
    data(){
      return{ 
        store: store,
      }
  
    },
    mounted(){
      console.log('ciao')
    }
  }
</script>

<style lang="scss" scoped>

</style>
