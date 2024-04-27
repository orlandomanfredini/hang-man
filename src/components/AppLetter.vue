<template>
    <div class="col" @click="returnLetter()">
         {{ letter }}
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        props: ['letter'],
        data(){
            return{
                store: store,
            }
        },
        methods: {
            returnLetter(){
                console.log(this.letter);
                
                
                if(!this.store.random.includes(this.letter)){
                     this.store.error++;

                    if(this.store.error === 5){
                        this.store.error = 'GAME OVER'
                        return this.store.visibleAlphabet = false;       
                    }
                }
                if(!this.store.matchLetter.includes(this.letter)){
                    return this.store.matchLetter.push(this.letter);
                }

                
            }
        }
    }
</script>

<style lang="scss" scoped>
.col{
    width: 55px;
    height: 55px;
    border-radius: 20px;
    color: white;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(151, 68, 151);
    
}
</style>