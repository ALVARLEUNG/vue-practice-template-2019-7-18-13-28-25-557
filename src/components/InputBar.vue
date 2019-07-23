<template>
    <el-input placeholder="请输入数字" v-model.number="inputNumber"></el-input>
</template>

<script>
    export default {
        name: "InputBar",
        data(){
            return {
              inputNumber: 0
            };
        },
        watch: {
            inputNumber:function (newVal) {
                this.$store.commit('initInputNumber', newVal);
            }
        }
    }
</script>

<style scoped>

</style>