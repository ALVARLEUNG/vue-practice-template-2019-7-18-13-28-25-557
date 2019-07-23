<template>
    <div class="hello">
        <InputBar></InputBar>
        <div v-for="n in this.$store.state.inputNumber" :key="n">
            <CounterGroup></CounterGroup>
        </div>
       <FooterBar></FooterBar>
    </div>
</template>

<script>
    import CounterGroup from './CounterGroup.vue'
    import InputBar from './InputBar.vue'
    import FooterBar from './FooterBar.vue'

    export default {
        components: {
            CounterGroup,
            InputBar,
            FooterBar
        },
        name: 'HelloWorld',
        props: {
            msg: String
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
