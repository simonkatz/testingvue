<template>
    <div>
        <span class="count" v-text="count"></span>
        
        <button class="increment" @click="count++">Increment</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            };
        }
    }
</script>
