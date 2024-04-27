<template>
    <section>
        <div class="container">
            <div class="row">
               <AppLetter v-for="(letter, i) in store.alphabet" :key="i" :letter="letter" />
            </div>
        </div>
    </section>

</template>

<script>
import { store } from '../store';
import AppLetter from './AppLetter.vue';

export default {
    components: {
        AppLetter,
    },
    data() {
        return {
            store: store,
        }
    }
}
</script>

<style lang="scss" scoped>
section{
    padding: 20px;


    .container{
        width: 1000px;
        margin: 0 auto;

        .row{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 3px;
        }
    }
}
</style>