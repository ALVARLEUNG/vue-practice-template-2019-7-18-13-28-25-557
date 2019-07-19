<template>
  <div class="hello">
    <p>  {{number}}</p>
    <button type="danger" @click="add()">点我+</button>
    <button type="danger" @click="minus()">点我-</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 0
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
     add (){
      this.number++;
    },
     minus() {
      this.number--;
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
