<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col" v-for="(letter, i) in store.random" :key="i">
                    <span v-if="store.matchLetter.includes(letter)">{{ letter }}</span>
                    <span v-else>
                        <font-awesome-icon :icon="['fas', 'minus']" />
                    </span>

                </div>
            </div>

        </div>
    </section>

</template>

<script>
import { store } from '../store';



export default {

    data() {
        return {
            store: store,
            
        }
    },
    methods: {
       
    }
}
</script>

<style lang="scss" scoped>

section{
    padding: 40px 0;
}
.container {
    width: 1000px;
    height: 50px;
    margin: 0 auto;
    border: 2px solid rgb(87, 120, 180);
    padding: 10px;

    .row{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        height: 100%;
    }
}
</style>