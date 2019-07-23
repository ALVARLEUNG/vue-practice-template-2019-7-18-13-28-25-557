<template>
    <el-input v-model="cool"></el-input>
</template>

<script>
    export default {
        name: "FooterBar",
        computed: {
            cool (){
                return this.$store.getters.result;
            }
        }
    }
</script>

<style scoped>

</style>