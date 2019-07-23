<template>
    <div>
        <p> {{number}}</p>
        <button type="danger" @click="add()">点我+</button>
        <button type="danger" @click="minus()">点我-</button>
        <br/><br/>
    </div>
</template>
<script>
    export default {
        name: "CounterGroup",
        data() {
            return {
                number: 0
            };
        },
        methods: {
            add() {
                this.number++;
                this.$store.commit('add');
            },
            minus() {
                this.number--;
                this.$store.commit('minus',1);
            }
        },
        destroyed() {
            this.$store.commit('minus', this.number)
        }
    }

</script>

<style scoped>

</style>