<template>
    <div class="hello">
        <el-input placeholder="请输入数字" v-model.number="inputNumber"></el-input>
        <div v-for="n in inputNumber" :key="n">
            <CounterGroup></CounterGroup>
        </div>
        <el-input v-model="this.$store.state.count"></el-input>
    </div>
</template>

<script>
    import CounterGroup from './CounterGroup.vue'

    export default {
        data() {
            return {
                inputNumber: 0
            };
        },
        components: {
            CounterGroup
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        mounted() {
           this.totalCount = this.$store.state.count;       }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
