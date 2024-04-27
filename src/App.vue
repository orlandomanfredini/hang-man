<template>
  <AppHeader />
  <AppLengthLetter />
  <AppAlphabet v-if="store.visibleAlphabet" />
  <AppError />
  
  
</template>

<script>
import axios from 'axios';
import {store} from './store.js'
import AppHeader from './components/AppHeader.vue';
import AppAlphabet from './components/AppAlphabet.vue';
import AppLengthLetter from './components/AppLengthLetter.vue';
import AppError from './components/AppError.vue';




  export default {
    components: {
      AppHeader,
      AppAlphabet,
      AppLengthLetter,
      AppError,
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
