<template>
    <div>
        Errori: {{ store.error }}
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        data(){
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    text-align: center;
    margin-top: 10px;
}
</style>