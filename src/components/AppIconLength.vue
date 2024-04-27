<template>
    <div>
        <span v-if="match">{{ lettera }}</span>
    </div>

</template>

<script>
import { store } from '../store';

export default {
    props: ['lettera'],
    data() {
        return {
            store: store,
            match: false,
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    display: flex;
    flex-direction: column;
    
}
</style>