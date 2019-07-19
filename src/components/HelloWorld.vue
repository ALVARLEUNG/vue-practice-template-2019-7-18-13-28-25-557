<template>
    <div class="hello">
        <el-input type="number" placeholder="请输入数字" v-model="inputNumber"></el-input>
        <div v-for="n in parseInt(counterNumber)" :key="n">
            <CounterGroup v-on:calculate="calculate"></CounterGroup>
        </div>
        <el-input v-model="totalCount"></el-input>
    </div>
</template>

<script>
    import CounterGroup from './CounterGroup.vue'

    export default {
        data() {
            return {
                inputNumber: '',
                totalCount: 0,
                counterNumber: 0
                // length: parseInt(this.inputNumber)
            };
        },
        components: {
            CounterGroup
        },
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
          calculate (number) {
              this.totalCount +=number;

          }
        },
        mounted() {
          this.counterNumber = this.inputNumber;
        },
        watch: {
            inputNumber (newCount) {
              return this.counterNumber = newCount;
            }
        }
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
