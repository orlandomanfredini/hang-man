<template>
    <header>
        <div class="container">
            <div class="row">
                <h1>{{ title }}</h1>
                <button @click="randomWord()">GENERA PAROLA</button>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store: store,
            title: 'HANG-MAN'
        }
    },
    methods: {
        randomWord() {
            axios.get('https://random-word-api.herokuapp.com/word?lang=it')
                .then((res) => {
                    const data = res.data[0];

                    this.store.random = data;
                    console.log(this.store.random);
                    


                })
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    background-color: rgba(87, 120, 180, 0.8);
    padding: 60px 30px 20px;
    color: rgb(151, 68, 151);


    .container {
        width: 100%;


        .row {
            display: flex;
            flex-direction: column;
            align-items: center;


            button {
                background-color: transparent;
                border-radius: 8px;
                border: 1px solid rgb(151, 68, 151);
                padding: 2px 6px;
                margin-top: 35px;

            }
        }
    }
}
</style>